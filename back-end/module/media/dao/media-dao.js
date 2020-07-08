const IBaseDao = require('servercore/dao/i-base-dao');

const MediaEntities = require('../entities/media-entity');

const {postGres} = require('servercore/postgres/postgresPipe');



// We use the media type to filter the type when pulling some mediaInfo.

// Add the media type tables and populates it with some base info.
require('./media-type-dao');


// --------------- Let add the basic table --------------------
// Maybe ask for a better generated ID
postGres.addCreateTable(
    `CREATE TABLE IF NOT EXISTS media (
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



// ------------- And then let modify them ------------------------
// cannot use partition since foreign key D:
postGres.addModifyTable( // Look if the index is bad
    `CREATE INDEX mediaType ON mediaTypId`
);

// Add a tags
postGres.addModifyTable(
    `CREATE TABLE IF NOT EXISTS tagsMedia (
        FOREIGN KEY (fk_id) REFERENCES media (id) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY (fk_tags) REFERENCES tag (id) ON UPDATE CASCADE ON DELETE SET NULL
    )`
);

// Add authorization
postGres.addModifyTable(
    `CREATE TABLE IF NOT EXISTS authorizationMedia (
        FOREIGN KEY (fk_id) REFERENCES media (id) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY (fk_authorization) REFERENCES authorization (id) ON UPDATE CASCADE ON DELETE CASCADE
    )`
);

class MediaDao extends IBaseDao{
    
    /**
     * Search and return the media with the corresponding id.
     * @param {number} id - The id of the user. 
     */
    select(id){

    }


    // Should we change the behaviour of commit if media.id is defined ? 
    // aka if media.id !== undefined then modify instead of insert.
    
    /**
     * Add a media to the database and return it with it new id.
     * @param {MediaEntities} media - The media to add.
     */
    commit(media){

    }

    /**
     * 
     * @param {MediaEntities} media 
     */
    modify(media){

    }


    delete(media){

    }

}

module.exports = MediaDao;