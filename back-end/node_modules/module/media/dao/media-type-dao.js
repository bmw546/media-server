const IBaseDao = require('servercore/dao/i-base-dao');

const MediaTypeEntities = require('../entities/media-type-entity');

const {postGres} = require('servercore/postgres/postgresPipe');
const PostgresQueryEntity = require('servercore/entities/postgres-query-entity');

/** @description The name of this dao table */
const name = "mediaType";
// --------------- Let add the basic table --------------------
// Mayby ask for a better generated ID
postGres.addCreateTable(
    `CREATE TABLE IF NOT EXISTS ${name} (
        id INT GENERATED ALWAYS AS IDENTITY,
        name STRING,
    )`
);

// Populate the table with base info
postGres.addCreateTable(
    `INSERT INTO ${name} (name) VALUES ('video'), ('image'), ('audio'), ('movies')`
);


class MediaDao extends IBaseDao{

    // commit, update and delete should not be used here

    async select(id){
        let selectResult = await this.baseSelect(id);
        return new MediaTypeEntities(selectResult.rows[0]);
    }

}