const IBaseDao = require('servercore/dao/i-base-dao');

const RoleEntity = require('../entities/role-entity');

const {postGres} = require('servercore/postgres/postgresPipe');


// --------------- Let add the basic table --------------------
// Mayby ask for a better generated ID
postGres.addCreateTable(
    `CREATE TABLE IF NOT EXISTS role (
        id INT GENERATED ALWAYS AS IDENTITY,
        title STRING,
        description STRING
    )`
);

// Adding some data
postGres.addCreateTable(
    `INSERT INTO mediaType (title, description)
    VALUES ('root', 'The root system'), 
    ('admin', "The system admin"),
    ('user', "A registered user"),
    ('guest', "A non registered user")`
);

class UserDao extends IBaseDao{
    
    /**
     * Search and return the role with the corresponding id.
     * @param {number} id - The id of the role. 
     */
    select(id){

    }

    // Not adding role by design.
}

module.exports = UserDao;