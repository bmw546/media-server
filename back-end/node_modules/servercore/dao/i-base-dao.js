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
    buildTable(){}

    /**
     * @abstract
     * 
     * @description Function that will build the relation for the specified dao.
     */
    buildRelation(){}

    //------------------- Base Function that everyone should have ----------------------------- //
    /**
     * @abstract
     * 
     * @description Retrieve from the database
     */
    get(){}

    /**
     * @abstract
     * 
     * @description Set a value to the database
     */
    set(){}

    /**
     * @abstract
     * 
     * @description Modify a value to the database
     */
    mod(){}

    /**
     * @abstract
     * 
     * @description Delete a value from the database
     */
    del(){}
}

module.exports = IBaseDao;