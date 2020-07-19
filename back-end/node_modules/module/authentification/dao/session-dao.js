const redisSessions = require("redis-sessions");
/** @see https://github.com/smrchy/redis-sessions#readme **/

const RedisConfigs = {
    requestTimeout: 3000,
}

class SessionDao{
    /**
     * @description Delay to wait before assuming Redis has successfully started.
     */
    static get StartUpDelay() { return 850; }

    // We have to start redis !
    // or do something to other start it.

    /** @description open a connection with the redis server */
    async openRedisConnection(){

        if(this.redisClient)
            throw new Error("Cannot open two redis connection at once !");
        
        try {
            this.redisClient = new redisSessions({
                host: RedisConfigs.host,
                port: RedisConfigs.port,
            });
            // Ping so we can test if we can communicate with redis. If we cannot we expect to throw.
            await this.ping();

        } catch (error) {
            if (this.redisClient)
                this.redisClient.quit();

            throw error;
        }
    }

    /** @description Terminate a redis connection with the redis server. */
    closeRedisConnection(){
        if (this.redisClient){
            this.redisClient.quit();
            this.redisClient = undefined;
        } 
    }

    /**
     * @description Create a timeout for the command send to redis
     * @param {string} command 
     * @param {*} reject 
     * @return A timeout created by {@link setTimeout}.
     */
    _timeout(command, reject){
        return setTimeout(() => {

            this.closeRedisConnection();

            reject(new Error(command));
        }, RedisConfigs.requestTimeout);
    }

    /**
     * @description Send a ping command to the redis server
     * @returns {Promise<bool>} A promise that resolve when the server response. Return true if the server send a valid response, false otherwise.
     */
    async ping(){
        return new Promise((resolve, reject) => {
            let timeout = this._timeout(`ping`, reject);

            this.redisClient.ping((err, response) => {
                clearTimeout(timeout);

                if(err) reject(err);

                //Why PONG ? https://github.com/smrchy/redis-sessions#ping
                return resolve(response === `PONG`);
            });
        });
    }


}