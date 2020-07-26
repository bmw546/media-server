const JsUtil = require('servercore/util/js-util');

const redisSessions = require("redis-sessions");
/** @see https://github.com/smrchy/redis-sessions#readme **/

const SessionEntity = require(`../entities/session-entity`);

const RedisConfigs = {
    requestTimeout: 3000,
    appName: `MediaServer`,
};

function redisSessionConverter(redisSession){
    if(redisSession.d)
        return new SessionEntity(JSON.parse(redisSession.d.sessionJson));
    return undefined;
}

class SessionDao{

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
     * @description Create a timeout for the command send to redis.
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

    /**
     * @description Add a session to the redis server.
     * @param {SessionEntity} session - The session to insert into redis.
     */
    create(session){
        // throw if session not ok
        return new Promise((resolve, reject) => {
            let timeout = this._timeout(`create`, reject);
            
            this.redisClient.create({
                app: RedisConfigs.appName,
                    id: session.userId,
                    ip: session.ip,
                    ttl: session.timeToLive,
                    d: {sessionJson: JSON.stringify(session)},
            },
            (error, response) => {
                clearTimeout(timeout);

                if (error) return reject(error);

                // Add the uuid generated by redis.
                session.uuid = response.token;

                resolve(session);
            });
        });
    }

    /**
     * @description Get a session from the redis server.
     * @param {string} uuid 
     */
    get(uuid, update = false){
        return new Promise((resolve, reject) => {

            let timeout = this._timeout('get', reject);

            this.redisClient.get({
                    app: RedisConfigs.appName,
                    token: uuid,
                    //`Hack`: we aren't suppose to use _noupdate since it private and it doesn't have any documentation.
                    // Used here to access session without renewing their ttl.
                    _noupdate: !update || false,
                },
                (error, response) => {
                    clearTimeout(timeout);

                    if (error) return reject(error);

                    resolve(redisSessionConverter(response));
                });
        });
    }

    /**
     * @description Delete a uuid from the redis server.
     * @param {string} uuid 
     */
    delete(uuid){
        return new Promise((resolve, reject) => {

            let timeout = this._timeout('delete', reject);

            this.redisClient.kill({
                    app: RedisConfigs.appName,
                    token: uuid,
                },
                (error, response) => {
                    clearTimeout(timeout);

                    if (error) return reject(error);

                    resolve();
                });
        });
    }



    /**
     * @description Find session stored in redis.
     * @param {number[]} [userIds] - Filter out session that doesn't belong to one of these user.
     * @param {number} [lastActive] - Number of second we should search session who were active in the last x seconds, default 1 hours.
     */
    search(userIds, lastActive = (60*60)) {

        return new Promise((resolve, reject) => {

            let timeout = this.timeout('search', reject);

            this.redisClient.soapp({
                app: RedisConfigs.appName,
                dt: lastActive

            }, (err, {sessions}) => {
                clearTimeout(timeout);

                if (err) return reject(err);

                // We convert session.id to number since redis keeps it as a string.
                if(userIds)
                    sessions = sessions.filter(session => userIds.indexOf(Number(session.id)) !== -1);

                resolve(redisSessionConverter(sessions));
            });
        });
    }

}

module.exports = SessionDao;