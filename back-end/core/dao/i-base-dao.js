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
    selectQuery(tableName = name){
        return `SELECT * FROM ${tableName} WHERE`;
    }

    deleteQuery(tableName = name){
        return `DELETE FROM ${tableName} WHERE`;
    }

    updateQuery(update, tableName = name){
        return `UPDATE ${tableName} SET ${update} WHERE`;
    }

    insertQuery(tableName = name, column){
        return `INSERT INTO ${tableName} VALUES`;
    }

    //------------------------------ Base Query --------------------------------------
    /**
     * @description Base Select to select a object by its id.
     * @param {number} id 
     */
    async selectById(id){
        
        return this._entityBuilder(
            await postGres.executeQuery(new PostgresQueryEntity({
                command: `${this.selectQuery()} id = $id`,
                parameters: [id]
            })).rows[0]
        );
    }
    
    
    /**
     * @description Base object to create a update a element in the db by its id.
     * @param {*} object 
     */
    async modify(object){
        object = this._prepare(object);

        let result = await postGres.executeQuery(new PostgresQueryEntity({
            command: `${this.updateQuery(Object.keys(object).map((key) => `${key} = $${key}`))}`+
            `id = $id`,
            parameters: Object.keys(media).map((key) => `${object[key]}`).concat([object.id])
        }));
        return this._entityBuilder(result.rows[0]);
    }

    /**
     * @description Base object to create a commit.
     * @param {*} object 
     */
    async commit(object){
        object = this._prepare(object);

        let result = await postGres.executeQuery(new PostgresQueryEntity({
            command: `${this.insertQuery} ` + Object.keys(object).map((key) => `$${$key}`),
            parameters: Object.keys(object).map((key) => object[key])
        }));
        return this._entityBuilder(result.rows[0]);
    }

    // protect those function and keep tem like 'delete'
    async delete(id){

        return this._entityBuilder( 
            await postGres.executeQuery(new PostgresQueryEntity({
                command: `${this.deleteQuery} id = $id`,
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