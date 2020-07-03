const IBaseDao = require('servercore/dao/i-base-dao');

const UserEntity = require('../entities/user-entity');

const {postGres} = require('servercore/postgres/postgresPipe');


// --------------- Let add the basic table --------------------

postGres.addCreateTable(
    `CREATE TABLE IF NOT EXISTS user (
        id INT GENERATED ALWAYS AS IDENTITY
        (START WITH 4 INCREMENT BY 3),
        username STRING,
        selectedPageSetting STRING,
        avatarImage STRING,
        session STRING,
        saltedUserNamePassword STRING,
        auth0Id INT,
        email STRING,
        lastMedia INT,
        time DATE
    )`
);

// ------------- And then let modify them ------------------------
postGres.addModifyTable(
    `` //TODO
);
class UserDao extends IBaseDao{
    
    /**
     * Search and return the user with the corresponding id.
     * @param {number} id - The id of the user. 
     */
    select(id){

    }


    // Should we change the behaviour of commit if user.id is defined ? 
    // aka if user.id !== undefined then modify instead of insert.
    
    /**
     * Add a user to the database and return it with it new id.
     * @param {UserEntity} user - The user to add.
     */
    commit(user){

    }

    /**
     * 
     * @param {UserEntity} user 
     */
    modify(user){

    }

}

module.exports = UserDao;