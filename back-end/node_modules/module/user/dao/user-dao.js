const IBaseDao = require('servercore/dao/i-base-dao');

const UserEntity = require('../entities/user-entity');
const RoleEntity = require('../entities/role-entity');

const {postGres} = require('servercore/postgres/postgresPipe');


// --------------- Let add the basic table --------------------
// Maybe ask for a better generated ID
postGres.addCreateTable(
    `CREATE TABLE IF NOT EXISTS user (
        id INT GENERATED ALWAYS AS IDENTITY,
        username STRING,
        avatarImage STRING,
        session STRING,
        saltedUserNamePassword STRING,
        auth0Id INT,
        email STRING,
        lastMedia INT,
        time DATE,
        role INT
    )`
);

// ------------- And then let modify them ------------------------

// Create an key table.
postGres.addModifyTable(
    `CREATE TABLE IF NOT EXISTS userPageSetting (
        id INT GENERATED ALWAYS AS IDENTITY,
        FOREIGN KEY user REFERENCES user (id) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY pageSetting REFERENCES pageSetting (id) ON UPDATE CASCADE ON DELETE SET NULL
    )`
);

postGres.addModifyTable(
    `ALTER TABLE user
        ADD CONSTRAINT fk_role FOREIGN KEY (role) REFERENCES role (id) ON UPDATE CASCADE ON DELETE SET NULL
    `
);
class UserDao extends IBaseDao{

    /**
     * @description Prepare an user entity for sending it to the database.
     * @param {UserEntity} user 
     */
    _prepare(user){
        user.role = user.role.id;
        return user;
    }

    /**
     * @description build an User entity from an postgres result.
     * @param {*} result 
     */
    _buildEntity(result){
        let user = new UserEntity(result);
        user.role = new RoleEntity(result.role);

        return user;
    }
}

module.exports = UserDao;