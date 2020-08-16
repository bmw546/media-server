const IBaseDao = require('servercore/dao/i-base-dao');

const AuthorizationEntity = require('../entities/authorization-entity');
const RoleEntity = require('module/user/entities/role-entity');

const {postGres} = require('servercore/postgres/postgresPipe');

/** @description The name of this dao table */
const name = "authorization_table";

// --------------- Let add the basic table --------------------
postGres.addCreateTable(
    `CREATE TABLE IF NOT EXISTS ${name} (
        id serial primary key,
        role INT,
        authorizationRule VARCHAR(175),
        condition TEXT
    )`
);


// ------------- And then let modify them ------------------------
postGres.addModifyTable(
    `ALTER TABLE ${name} ADD CONSTRAINT fk_role FOREIGN KEY (role) REFERENCES role (id)  ON UPDATE CASCADE ON DELETE CASCADE`
);
class AuthorizationDao extends IBaseDao{
    
    /**
     * @description prepare an authorization entity too send it to the data store.
     * @param {AuthorizationEntity} authorization 
     */
    _prepare(authorization){
        authorization.role = authorization.creator.id;
        delete authorization.creator;
        
        return authorization;
    }

    /**
     * @description build an entity from an postgres result.
     * @param {*} result 
     */
    _buildEntity(result){
        let authorization = new AuthorizationEntity(result);
        authorization.role = new RoleEntity({id: result.role});

        return authorization;
    }
}

module.exports = AuthorizationDao;