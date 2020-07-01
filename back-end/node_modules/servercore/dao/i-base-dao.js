const NotImplementedError = require('servercore/errors/not-implemented-error');

/**
 * @abstract
 * 
 * @description Handles the communication with the database
 */
class IBaseDao{

    // --------------------- Base function to build the tables ---------------------------
    /**
     * @abstract
     * 
     * @description Function that will build the table for the specified dao.
     */
    buildTable(){
        throw new NotImplementedError('buildTable');
    }

    /**
     * @abstract
     * 
     * @description Function that will build the relation for the specified dao.
     */
    buildRelation(){
        throw new NotImplementedError('buildRelation');
    }

    //------------------- Base Function that everyone should have ----------------------------- //
    /**
     * @abstract
     * 
     * @description Retrieve from the database with a specific id
     */
    select(){
        throw new NotImplementedError('select');
    }

    /**
     * @abstract
     * 
     * @description Set a value to the database
     */
    commit(){
        throw new NotImplementedError('commit');
    }

    /**
     * @abstract
     * 
     * @description Modify a value to the database
     */
    modify(){
        throw new NotImplementedError('modify');
    }

    /**
     * @abstract
     * 
     * @description Delete a value from the database
     */
    delete(){
        throw new NotImplementedError('delete');
    }
}

module.exports = IBaseDao;