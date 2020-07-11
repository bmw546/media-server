const IBaseDao = require('servercore/dao/i-base-dao');

const MediaEntities = require('../entities/media-entity');

const {postGres} = require('servercore/postgres/postgresPipe');
const PostgresQueryEntity = require('servercore/entities/postgres-query-entity');


/** @description The name of this dao table */
const name = "media";

// We use the media type to filter the type when pulling some mediaInfo.

// Add the media type tables and populates it with some base info.
require('./media-type-dao');


// --------------- Let add the basic table --------------------
// Maybe ask for a better generated ID
postGres.addCreateTable(
    `CREATE TABLE IF NOT EXISTS ${name} (
        id INT GENERATED ALWAYS AS IDENTITY,
        title STRING,
        description STRING,
        creator STRING,
        authorization STRING,
        size INT,
        fileName STRING,
        rating INT,
        numberRating INT,
        numberView INT,
        FOREIGN KEY (mediaTypeId) REFERENCES mediaType (id) ON UPDATE CASCADE ON DELETE SET NULL
        
    )`
);
//might delete the media type not really usefull to be honest
// ------------- And then let modify them ------------------------

postGres.addModifyTable(
    `CREATE INDEX mediaType ON mediaTypId`
);

// Add a tags
postGres.addModifyTable(
    `CREATE TABLE IF NOT EXISTS tagsMedia (
        FOREIGN KEY (fk_id) REFERENCES ${name} (id) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY (fk_tags) REFERENCES tag (id) ON UPDATE CASCADE ON DELETE SET NULL
    )`
);

// Add authorization
postGres.addModifyTable(
    `CREATE TABLE IF NOT EXISTS authorizationMedia (
        FOREIGN KEY (fk_id) REFERENCES ${name} (id) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY (fk_authorization) REFERENCES authorization (id) ON UPDATE CASCADE ON DELETE CASCADE
    )`
);

// REDO THE PARAMETER QUERY

class MediaDao extends IBaseDao{
    
    /**
     * Search and return the media with the corresponding id.
     * @param {number} id - The id of the user. 
     */
    async selectId(id){

        let selectResult = await postGres.executeQuery(new PostgresQueryEntity({
            command: `${this.selectQuery()} id = $id::number`,
            parameters: [id]
        }));

        return new MediaEntities(selectResult.rows[0]);

    }


    // Should we change the behaviour of commit if media.id is defined ? 
    // aka if media.id !== undefined then modify instead of insert.
    // TODO check the return here.
    /**
     * Add a media to the database and return it with it new id.
     * @param {MediaEntities} media - The media to add.
     */
    async commit(media){
        return await postGres.executeQuery(new PostgresQueryEntity({
            command: `${this.insertQuery} ` + Object.keys(MediaEntities).map((key) => `$${$key}`),
            parameters: Object.keys(media).map((key) => media[key])
        }));

    }

    /**
     * 
     * @param {MediaEntities} media 
     */
    async modify(media){
        return await postGres.executeQuery(new PostgresQueryEntity({
            command: `${this.updateQuery(Object.keys(media).map((key) => `${key} = ${key}`))}`,
            parameters: somethig
        }));
    }


    delete(media){

    }

}

module.exports = MediaDao;