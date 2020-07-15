const IBaseDao = require('servercore/dao/i-base-dao');

const AuthorizationEntity = require('../entities/authorization-entity');
const RoleEntity = require('module/user/entities/role-entity');

const {postGres} = require('servercore/postgres/postgresPipe');


// --------------- Let add the basic table --------------------
postGres.addCreateTable(
    `CREATE TABLE IF NOT EXISTS authorization (
        id INT GENERATED ALWAYS AS IDENTITY,
        role INT,
        authorizationRule STRING,
        condition STRING
    )`
);


// ------------- And then let modify them ------------------------
postGres.addModifyTable(
    `ALTER TABLE authorization ADD CONSTRAINT fk_role FOREIGN KEY (role) REFERENCES role (id)  ON UPDATE CASCADE ON DELETE CASCADE`
);
class AuthorizationDao extends IBaseDao{
    
    /**
     * Search and return the authorization with the corresponding id.
     * @param {number} id - The id of the user. 
     */
    async select(id){
        return this._repopulateAuthorization(await this.baseSelect(id));
    }


    // Should we change the behaviour of commit if authorization.id is defined ? 
    // aka if authorization.id !== undefined then modify instead of insert.
    
    /**
     * Add a authorization to the database and return it with it new id.
     * @param {AuthorizationEntity} authorization - The authorization to add.
     */
    async commit(authorization){
        return this._repopulateAuthorization(await this.baseCommit(this._clearAuthorization(authorization)));
    }

    /**
     * Modify an authorization to the database
     * @param {AuthorizationEntity} authorization 
     */
    async modify(authorization){
        return this._repopulateAuthorization(await this.baseModify(this._clearAuthorization(authorization)));
    }

    async delete(id) {
        // do very special query
    }


    /**
     * Delete an authorization from the database.
     * @param {number} id 
     */
    async delete(id){
        return this._repopulateAuthorization(await this.baseDelete(this._clearAuthorization(authorization)));
    }

    _clearAuthorization(authorization){
        authorization.role = authorization.creator.id;
        delete authorization.creator;
        
        return authorization;
    }

    _repopulateAuthorization(result){
        let authorization = new AuthorizationEntity(result.rows[0]);
        authorization.role = new RoleEntity({id: result.rows[0].role});

        return authorization;
    }
}

module.exports = AuthorizationDao;