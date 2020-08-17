const IBaseDao = require('servercore/dao/i-base-dao');

const RoleEntity = require('../entities/role-entity');

const {postGres} = require('servercore/postgres/postgresPipe');

/** @description The name of this dao table */
const name = "role";

// --------------- Let add the basic table --------------------
// Mayby ask for a better generated ID
postGres.addCreateTable(
    `CREATE TABLE IF NOT EXISTS ${name} (
        id serial primary key,
        title VARCHAR(50),
        description VARCHAR(150)
    )`
);

// Adding some data
postGres.addCreateTable(
    `INSERT INTO ${name} (title, description)
    VALUES ('root', 'The root system'), 
    ('admin', 'The system admin'),
    ('user', 'A registered user'),
    ('guest', 'A non registered user')`
);

class RoleDao extends IBaseDao{
    
    /**
     * @description Create an role entity from an postgres result.
     * @param {RoleEntity} result 
     */
    _buildEntity(result){
        return new RoleEntity(result);
    }
}

module.exports = RoleDao;