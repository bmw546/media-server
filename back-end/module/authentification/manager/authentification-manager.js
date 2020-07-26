const { v4: uuidv4 } = require('uuid');
//see https://www.npmjs.com/package/uuid

const CryptoJS = require ('crypto-js');

const JsUtil = require('servercore/util/js-util');

const UserDao = require('module/user/dao/user-dao');
const userDao = new UserDao();

const UserEntity = require('module/user/entities/user-entity');

const SessionEntity = require('../entities/session-entity');

const {sessionDao} = require('../injector');

const key = 'b55e1e9a7c794e58d53347ff3ce9251d';
class AuthentificationManager {


    loginByAuth(){
        //TODO WIP
    }

    _hashPassword(username, password){
        let saltedMessage = password + username + 'xXx_SaltTheMediaServer_xXx';
        return CryptoJS.HmacSHA256(saltedMessage, key).toString();
    }
    /**
     * @description Connected a user with username + password only.
     * @param {string} username 
     * @param {string} password 
     */
    async classicLogin(username, password){

        let user = userDao.getFromUserPw(username, _hashPassword(username, password));
        if(user){
            // create session and returns it.
            return await this.createSession(user);
        }

        // Throw cannot find user error.
        return undefined;
    }

    /**
     * 
     * @param {UserEntity} user 
     */
    async classicSignup(user){

        if(!(userDao.doesUsernameNameExist(user.username))){
            // Username exist cannot create this account !
            return undefined;
        }        

        if(JsUtil.isNill(user.username) || JsUtil.isNill(user.password)){
            return undefined; // cannot create account without any username !
        }

        // Hash the password for security
        user.password = this._hashPassword(user.username, user.password);

        user = userDao.commit(user);
        if(user){
            // create session and returns it.
            return await this.createSession(user);
        }

        // Throw cannot find user error.
        return undefined;
    }

    async disconnect(uuid){
        await sessionDao.delete(uuid);
    }

    async createSession(user, token, ip){
        let session = new SessionEntity({
            userId: user.id,
            uuid: uuidv4(),
            rawAccessToken: token,
            ip: ip,
            creationTime: Date.now(),

        });
        
        return session;
    }

    async getSession(uuid, renew = false){
        return await sessionDao.get(uuid, renew);
    }

    async renewSession(session){
        await sessionDao.get(session.uuid, true);
    }
    
    async signup(user){
        // throw if user invalid
        user = new UserEntity(await userDao.commit(user));
        return await this.createSession(user);
    }

}

exports.module = AuthentificationManager;