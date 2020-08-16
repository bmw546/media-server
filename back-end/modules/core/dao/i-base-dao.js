const {postGres} = require('servercore/postgres/postgresPipe');
const PostgresQueryEntity = require('servercore/entities/postgres-query-entity');

const JsUtil = require('servercore/util/js-util');

const NotImplementedError = require('servercore/errors/not-implemented-error');

/**
 * see hopchild/file-management/daos/file-info-daos
 * @abstract
 * 
 * @description Handles the communication with the database
 */
class IBaseDao{
    
    //------------------- Base Function that everyone should have ----------------------------- //

    /**
     * @protected
     * @description Prepare an entity for an db query.
     * @param {*} entity 
     */
    _prepare(entity){
        return entity;
    }

    /**
     * @protected
     * @description Transform an query result to an entity.
     * @param {*} result 
     */
    _buildEntity(result){
        return result;
    }

    // -------------------------------------- Query keyword shortcut --------------------------
    selectQuery(tableName = this.name){
        return `SELECT * FROM ${tableName} WHERE`;
    }

    deleteQuery(tableName = this.name){
        return `DELETE FROM ${tableName} WHERE`;
    }

    updateQuery(update, tableName = this.name){
        return `UPDATE ${tableName} SET ${update} WHERE`;
    }

    insertQuery(columns, tableName = this.name){
        return `INSERT INTO ${tableName} (${columns}) VALUES`;
    }

    //------------------------------ Base Query --------------------------------------

    parametrizeObject(obj){
        let i = 0;
        return Object.keys(obj).map((key) => (key + ` = $`+(i = i+1)));
    }


    /**
     * @description Base Select to select a object by its id.
     * @param {number} id 
     */
    async selectById(id){

        let result = await postGres.executeQuery(new PostgresQueryEntity({
            command: `${this.selectQuery()} id = $1`,
            parameters: [id]
        }));
        return this._buildEntity(result.rows[0]);
    }
    
    
    /**
     * @description Base object to create a update a element in the db by its id.
     * @param {*} object 
     */
    async modify(object){
        let obj = JSON.parse(JSON.stringify(object));
        obj = this._prepare(obj);

        Object.keys(obj).map((key) => {
            if(JsUtil.isNil(obj[key])) {
                delete obj[key]
            }
        });

        let id = obj.id;
        delete obj.id;

        let result = await postGres.executeQuery(new PostgresQueryEntity({
            command: `${this.updateQuery(this.parametrizeObject(obj))}` +
                ` id = $`+ ( Object.keys(obj).length + 1 ),
            parameters: Object.keys(obj).map((key) => `${obj[key]}`).concat([id])
        }));
        return this._buildEntity(result.rows[0]);
    }

    prepareObjectForInsertUpdate(obj){
        let object = JSON.parse(JSON.stringify(obj));
        object = this._prepare(object);
        delete object.id;
        
    }

    generateQueryForCommit(obj){
        return new PostgresQueryEntity({
            // build query for commit
            command: `${this.insertQuery(Object.keys(object))}`+
                    `(`+ this.parametrizeObject(obj) + `) RETURNING *`,
            parameters: Object.values(object)
        });
    }
    /**
     * @description Base object to create a commit.
     * @param {*} obj
     */
    async commit(obj){
        
        let preparedObject = this.prepareObjectForQuery(obj);
    
        let results = await postGres.executeQuery(this.generateQueryForCommit(preparedObject), Object.values(object));

        return this._buildEntity(result.rows[0]);
        

        // insert this into a function (prepare data)
        let object = JSON.parse(JSON.stringify(obj));
        object = this._prepare(object);
        delete object.id;

        return this._buildEntity(result.rows[0]);
    }

    // protect those function and keep tem like 'delete'
    async delete(id){
        await postGres.executeQuery(new PostgresQueryEntity({
            command: `${this.deleteQuery()} id = $1`,
            parameters: [id]
        }));
    }
}

module.exports = IBaseDao;