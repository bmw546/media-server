const redisSessions = require("redis-sessions");
/** @see https://github.com/smrchy/redis-sessions#readme **/

class SessionDao{
    /**
     * @description Delay to wait before assuming Redis has successfully started.
     */
    static get StartUpDelay() { return 850; }

    // We have to start redis !
    // or do something to other start it.

    /** @description open a connection with the redis server */
    async openRedisConnection(){

        try {

            this.redisClient = new redisSessions({
                host: RedisConfigs.host,
                port: RedisConfigs.port,
            });

            // Ping so we can test if we can communicate with redis. If we cannot we expect to throw.
            await this.ping();

        } catch (e) {

            if (this.redisClient)
                this.redisClient.quit();

            throw e;
        }
        
    }
}