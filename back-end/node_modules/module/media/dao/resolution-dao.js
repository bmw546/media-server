const IBaseDao = require('servercore/dao/i-base-dao');

const ResolutionEntity = require('../entities/resolution-entity');

const {postGres} = require('servercore/postgres/postgresPipe');


// --------------- Let add the basic table --------------------
// Maybe ask for a better generated ID
postGres.addCreateTable(
    `CREATE TABLE IF NOT EXISTS resolution (
        id INT GENERATED ALWAYS AS IDENTITY,
        height INT,
        width INT
    )`
);

class ResolutionDao extends IBaseDao{
    
    /**
     * Search and return the resolution with the corresponding id.
     * @param {number} id - The id of the resolution. 
     */
    select(id){

    }


    /**
     * Add a resolution to the database and return it with it new id.
     * @param {ResolutionEntity} resolution - The resolution to add.
     */
    commit(resolution){

    }

    /**
     * Modify a resolution to the database.
     * @param {ResolutionEntity} resolution 
     */
    modify(resolution){

    }


    /**
     * @description Delete a resolution to the database.
     * @param {ResolutionEntity} resolution 
     */
    delete(resolution){

    }

}

module.exports = ResolutionDao; 