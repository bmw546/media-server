const IBaseDao = require('servercore/dao/i-base-dao');

const UserEntity = require('../entities/user-entity');
const RoleEntity = require('../entities/role-entity');

const {postGres} = require('servercore/postgres/postgresPipe');


// --------------- Let add the basic table --------------------
// Mayby ask for a better generated ID
postGres.addCreateTable(
    `CREATE TABLE IF NOT EXISTS user (
        id INT GENERATED ALWAYS AS IDENTITY
        (START WITH 24 INCREMENT BY 2),
        username STRING,
        selectedPageSetting INT,
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
postGres.addModifyTable(
    `CREATE TABLE IF NOT EXISTS userPageSetting (
        id INT GENERATED ALWAYS AS IDENTITY,
        FOREIGN KEY user REFERENCES user (id) ,
        FOREIGN KEY pageSetting REFERENCES pageSetting (id)
    )`
);

postGres.addModifyTable(
    `ALTER TABLE user
        ADD CONSTRAINT fk_role FOREIGN KEY (role) REFERENCES role (id)
        ADD CONSTRAINT fk_pageSetting FOREIGN KEY (selectedPageSetting) REFERENCES pageSetting (id)
    `
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