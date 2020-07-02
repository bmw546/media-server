const NotImplementedError = require('servercore/errors/not-implemented-error');

/**
 * @abstract
 * 
 * @description Handles the communication with the database
 */
class IBaseDao{
    
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