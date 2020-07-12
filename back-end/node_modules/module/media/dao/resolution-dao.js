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
        let selectResult = await postGres.executeQuery(new PostgresQueryEntity({
            command: `${this.selectQuery()} id = $id`,
            parameters: [id]
        }));
        return new ResolutionEntity(selectResult.rows[0]);
    }


    /**
     * Add a resolution to the database and return it with it new id.
     * @param {ResolutionEntity} resolution - The resolution to add.
     */
    async commit(resolution){
        return await postGres.executeQuery(new PostgresQueryEntity({
            command: `${this.insertQuery} ` + Object.keys(resolution).map((key) => `$${$key}`),
            parameters: Object.keys(media).map((key) => resolution[key])
        }));
    }

    /**
     * Modify a resolution to the database.
     * @param {ResolutionEntity} resolution 
     */
    async modify(resolution){
        return await postGres.executeQuery(new PostgresQueryEntity({
            command: `${this.updateQuery(Object.keys(media).map((key) => `${key} = $${key}`))}`+
            `id = $id`,
            parameters: Object.keys(media).map((key) => `${media[key]}`).concat([media.id])
        }));
    }


    /**
     * @description Delete a resolution to the database.
     * @param {ResolutionEntity} resolution 
     */
    delete(resolution){

    }

}

module.exports = ResolutionDao; 