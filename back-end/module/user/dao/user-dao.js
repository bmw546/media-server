const IBaseDao = require('servercore/dao/i-base-dao');

const UserEntity = require('../entities/user-entity');

class UserDao extends IBaseDao{

    buildTable(){

    }    

}

module.exports = UserDao;