const IBaseDao = require('servercore/dao/i-base-dao');

const AuthorizationEntity = require('../entities/authorization-entity');
const RoleEntity = require('../../user/entities/role-entity');


const {postGres} = require('servercore/postgres/postgresPipe');


// --------------- Let add the basic table --------------------
postGres.addCreateTable(
    `CREATE TABLE IF NOT EXISTS authorization (
        id INT GENERATED ALWAYS AS IDENTITY,
        role STRING,
        authorizationRule STRING,
        condition STRING
    )`
);


// ------------- And then let modify them ------------------------
postGres.addModifyTable(
    `ALTER TABLE authorization ADD CONSTRAINT fk_role FOREIGN KEY (role) REFERENCES role (id)`
);
class AuthorizationDao extends IBaseDao{
    
    /**
     * Search and return the authorization with the corresponding id.
     * @param {number} id - The id of the user. 
     */
    select(id){

    }


    // Should we change the behaviour of commit if authorization.id is defined ? 
    // aka if authorization.id !== undefined then modify instead of insert.
    
    /**
     * Add a authorization to the database and return it with it new id.
     * @param {AuthorizationEntity} authorization - The authorization to add.
     */
    commit(authorization){

    }

    /**
     * Modify an authorization to the database
     * @param {AuthorizationEntity} authorization 
     */
    modify(authorization){

    }


    /**
     * Delete an authorization from the database.
     * @param {number} id 
     */
    delete(id){

    }

}

module.exports = AuthorizationDao;