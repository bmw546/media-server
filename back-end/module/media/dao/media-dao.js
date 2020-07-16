const IBaseDao = require('servercore/dao/i-base-dao');

const MediaEntities = require('../entities/media-entity');

const {postGres} = require('servercore/postgres/postgresPipe');
const PostgresQueryEntity = require('servercore/entities/postgres-query-entity');

const ResolutionEntity = require('./resolution-entity');
const AuthorizationEntity = require('module/authorization/entities/authorization-entity');
const TagsEntity = require('servercore/entities/tags-entity');
const MediaTypeEntities = require('../entities/media-type-entity');



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


class MediaDao extends IBaseDao{

    _prepare(media){
        
        media.mediaTypeId = media.mediaTypeEntity.id;
        media.mediaTypeEntity = null;

        // delete see this: https://stackoverflow.com/questions/208105/how-do-i-remove-a-property-from-a-javascript-object
        delete media.mediaTypeEntity;

        return media;
    }


    _buildEntity(result){
        let media = new MediaEntities(commitResult.rows[0]);
        media.mediaTypeEntity = new MediaTypeEntities({id:commitResult.rows[0].mediaTypeId});

        return media;
    }
}

module.exports = MediaDao;