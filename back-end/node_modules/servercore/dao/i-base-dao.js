const NotImplementedError = require('servercore/errors/not-implemented-error');

/**
 * @abstract
 * 
 * @description Handles the communication with the database
 */
class IBaseDao{
    
    //------------------- Base Function that everyone should have ----------------------------- //
    ///**
    // * @abstract
    // * 
    // * @description Retrieve from the database with a specific id
    // */
    //select(){
    //    throw new NotImplementedError('select');
    //}
//
    ///**
    // * @abstract
    // * 
    // * @description Set a value to the database
    // */
    //commit(){
    //    throw new NotImplementedError('commit');
    //}
//
    ///**
    // * @abstract
    // * 
    // * @description Modify a value to the database
    // */
    //modify(){
    //    throw new NotImplementedError('modify');
    //}
//
    ///**
    // * @abstract
    // * 
    // * @description Delete a value from the database
    // */
    //delete(){
    //    throw new NotImplementedError('delete');
    //}

    /**
     * @abstract
     * @description Prepare an entity for an db query.
     * @param {*} entity 
     */
    _prepare(entity){
        return entity;
    }

    /**
     * @abstract
     * @description Transform an query result to an entity.
     * @param {*} result 
     */
    _entityBuilder(result){
        return result;
    }

    // -------------------------------------- Query keyword shortcut --------------------------
    selectQuery(){
        return `SELECT * FROM ${name} WHERE`;
    }

    deleteQuery(){
        return `DELETE FROM ${name} WHERE`;
    }

    updateQuery(update){
        return `UPDATE ${name} SET ${update} WHERE`;
    }

    insertQuery(){
        return `INSERT INTO ${name} VALUES`;
    }

    //------------------------------ Base Query --------------------------------------
    /**
     * @description Base Select to select a object by its id.
     * @param {number} id 
     */
    async baseSelect(id){
        
        return this._entityBuilder(
            await postGres.executeQuery(new PostgresQueryEntity({
                command: `${this.selectQuery()} id = $id`,
                parameters: [id]
            }))
        );
    }
    
    
    /**
     * @description Base object to create a update a element in the db by its id.
     * @param {*} object 
     */
    async baseModify(object){
        object = this._prepare(object);

        let result = await postGres.executeQuery(new PostgresQueryEntity({
            command: `${this.updateQuery(Object.keys(object).map((key) => `${key} = $${key}`))}`+
            `id = $id`,
            parameters: Object.keys(media).map((key) => `${object[key]}`).concat([object.id])
        }));
        return this._entityBuilder(result);
    }

    /**
     * @description Base object to create a commit.
     * @param {*} object 
     */
    async baseCommit(object){
        object = this._prepare(object);

        let result = await postGres.executeQuery(new PostgresQueryEntity({
            command: `${this.insertQuery} ` + Object.keys(object).map((key) => `$${$key}`),
            parameters: Object.keys(media).map((key) => object[key])
        }));
        return this._entityBuilder(result);
    }

    // protect those function and keep tem like 'delete'
    async baseDelete(id){

        return this._entityBuilder( 
            await postGres.executeQuery(new PostgresQueryEntity({
                command: `${this.deleteQuery} id = $id`,
                parameters: [id]
            }))
        );
    }
}

module.exports = IBaseDao;