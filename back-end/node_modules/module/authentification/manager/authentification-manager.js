const CryptoJS = require ('crypto-js');


const UserDao = require('module/user/dao/user-dao');
const userDao = new UserDao();

const UserEntity = require('module/user/entities/user-entity');

const key = 'b55e1e9a7c794e58d53347ff3ce9251d';
class AuthentificationManager {

    loginByAuth(){
        //TODO WIP
    }

    async classicLogin(username, password){
        let saltedMessage = password + username + 'xXx_SaltTheMediaServer_xXx';
        let saltedHashPassword = CryptoJS.HmacSHA256(saltedMessage, key).toString();

        let user = userDao.getFromUserPw(username, saltedHashPassword);
        if(user){
            // create session and returns it.
            return await this.createSession(user);
        }

        // Throw cannot find user error.
        return undefined;
    }

    createSession(user){
    }

    renewSession(session){
    }

    deleteSession(session){
    }
    
    async signup(user){
        // throw if user invalid
        user = new UserEntity(await userDao.commit(user));
        return await this.createSession(user);
    }

}

exports.module = AuthentificationManager;