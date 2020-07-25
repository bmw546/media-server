const IBaseDao = require('servercore/dao/i-base-dao');

const UserEntity = require('../entities/user-entity');
const RoleEntity = require('../entities/role-entity');

const PageSettingEntity = require('servercore/entities/page-setting-entity');

const {postGres} = require('servercore/postgres/postgresPipe');
const PostgresQueryEntity = require('servercore/entities/postgres-query-entity');
const JsUtil = require('servercore/util/js-util');



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

// Create an userPageSetting association table.
postGres.addModifyTable(
    `CREATE TABLE IF NOT EXISTS userPageSetting (
        id INT GENERATED ALWAYS AS IDENTITY,
        FOREIGN KEY userId REFERENCES user (id) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY pageSetting REFERENCES pageSetting (id) ON UPDATE CASCADE ON DELETE SET NULL
    )`
);

postGres.addModifyTable(
    `ALTER TABLE user
        ADD CONSTRAINT fk_role FOREIGN KEY (role) REFERENCES role (id) ON UPDATE CASCADE ON DELETE SET NULL
    `
);
class UserDao extends IBaseDao{

    // ========================== UserPageSetting ================================

    /**
     * @description Retrieve the list of user page setting for a specific user from the data store.
     * @param {UserEntity} user - The user to populate the page setting array. 
     * @returns {UserEntity} The same user entity as the one passed but with its selectedPageSettings populated.
     */
    async getUserPageSetting(user){
        let result = await postGres.executeQuery(new PostgresQueryEntity({
            command: `${this.selectQuery('userPageSetting')} userId = $id`,
            parameters: [user.id]
        }));
        for(let row of result.row){
            user.selectedPageSettings.push(new PageSettingEntity({id: row}));
        }
    }


    /**
     * @description  Deletes to the associative table all the association of user - userPageSetting
     * 
     * @param {UserEntity} user - The user to delete its userPageSetting.
     */
    async deleteUserPageSetting(user){
        return await postGres.executeQuery(new PostgresQueryEntity({
            command: `${this.deleteQuery('userPageSetting')} userId = $id`,
            parameters: [user.id]
        }));    
    }

    /**
     * @description Add to the associative table all the association of user - userPageSetting
     * 
     * @param {UserEntity} user - The user with its page setting
     */
    async addUsePageSetting(user){
        let result = [];
        for(let setting of user.selectedPageSettings){
            result.push(await postGres.executeQuery(new PostgresQueryEntity({
                command: `${this.insertQuery('userPageSetting')}`,
                parameters: [user.id, user.setting]
            })));
        }
        return result;
    }
    
    
    // ===============================================================================
    async getFromUserPw(username, hashedPassword){
        let result = await postGres.selectQuery(new PostgresQueryEntity({
            command: `${this.insertQuery()} username = $1 AND saltedUserNamePassword = $2`,
            parameters: [username, hashedPassword]
        })).rows[0];
        return this._buildEntity(result);

    }  
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
        if(JsUtil.isNill(result))
            return undefined;

        let user = new UserEntity(result);
        user.role = new RoleEntity(result.role);

        //TODO check this if we can even do this (so  we do like await selectById())
        return this.getUserPageSetting(user);
    }
}

module.exports = UserDao;