const {postGres} = require('servercore/postgres/postgresPipe');
const PostgresQueryEntity = require('servercore/entities/postgres-query-entity');

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
        return `INSERT INTO ${tableName} ${columns} VALUES`;
    }

    //------------------------------ Base Query --------------------------------------
    /**
     * @description Base Select to select a object by its id.
     * @param {number} id 
     */
    async selectById(id){
        
        return this._entityBuilder(
            await postGres.executeQuery(new PostgresQueryEntity({
                command: `${this.selectQuery()} id = $1`,
                parameters: [id]
            })).rows[0]
        );
    }
    
    
    /**
     * @description Base object to create a update a element in the db by its id.
     * @param {*} object 
     */
    async modify(object){
        let obj = this._prepare(object);

        let id = obj.id;
        delete obj.id;

        let result = await postGres.executeQuery(new PostgresQueryEntity({
            command: `${this.updateQuery(Object.keys(obj).map((key) => (`$`+Number(key))))}`+
            `id = $`+ ( Object.keys(obj).length + 1 ),
            parameters: Object.keys(obj).map((key) => `${obj[key]}`).concat([id])
        }));
        return this._entityBuilder(result.rows[0]);
    }

    /**
     * @description Base object to create a commit.
     * @param {*} object 
     */
    async commit(object){
        object = this._prepare(object);

        delete object.id;

        let i = -1;

        let result = await postGres.executeQuery(new PostgresQueryEntity({
            command: `${this.insertQuery(Object.keys(object).map((key) => (`$`+key)))}`+
                    `(`+ Object.keys(object).map((key) => (`$`+(i = i+1))) + `) RETURNING *`,
            parameters: Object.values(object)
        }));
        return this._entityBuilder(result.rows[0]);
    }

    // protect those function and keep tem like 'delete'
    async delete(id){

        return this._entityBuilder( 
            await postGres.executeQuery(new PostgresQueryEntity({
                command: `${this.deleteQuery} id = $1`,
                parameters: [id]
            })).rows[0]
        );
    }



    async getAssociationTable(tableName, entity){
        let result = [];

        for(let tags of media.tags){
            result.push(await postGres.executeQuery(new PostgresQueryEntity({
                command: `${this.insertQuery(tableName)}`,
                parameters: [media.id, tags]
            })));
        }

        return result;
    }
}

module.exports = IBaseDao;