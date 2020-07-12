const IBaseDao = require('servercore/dao/i-base-dao');

const ResolutionEntity = require('../entities/resolution-entity');

const {postGres} = require('servercore/postgres/postgresPipe');
const PostgresQueryEntity = require('servercore/entities/postgres-query-entity');

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
    async select(id){
        let selectResult = await this.baseSelect(id);
        return new ResolutionEntity(selectResult.rows[0]);
    }


    /**
     * Add a resolution to the database and return it with it new id.
     * @param {ResolutionEntity} resolution - The resolution to add.
     */
    async commit(resolution){
        let commitResult = await this.baseCommit(resolution);
        return new ResolutionEntity(commitResult.rows[0]); 
    }

    /**
     * Modify a resolution to the database.
     * @param {ResolutionEntity} resolution 
     */
    async modify(resolution){
        return await this.baseModify(resolution);
    }


    /**
     * @description Delete a resolution to the database.
     * @param {number} id 
     */
    async delete(id){
        return await this.baseDelete(id);
    }

}

module.exports = ResolutionDao; 