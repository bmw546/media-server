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
     * Search and return the user with the corresponding id.
     * @param {number} id - The id of the user. 
     */
    async select(id){
        return this._buildUser(await this.baseSelect(id));
    }


    // Should we change the behaviour of commit if user.id is defined ? 
    // aka if user.id !== undefined then modify instead of insert.
    
    /**
     * Add a user to the database and return it with it new id.
     * @param {UserEntity} user - The user to add.
     */
    async commit(user){
        return this._buildUser(await this.baseCommit(this._clearUser(user)));
    }

    /**
     * 
     * @param {UserEntity} user 
     */
    async modify(user){
        return this._buildUser(await this.baseModify(this._clearUser(user)));
    }

    _clearUser(user){
        user.role = user.role.id;
        return user;
    }

    _buildUser(result){
        let user = new UserEntity(result.rows[0]);
        user.role = new RoleEntity(result.rows[0].role);

        return user;
    }
}

module.exports = UserDao;