const IBaseDao = require('servercore/dao/i-base-dao');

const MediaEntities = require('../entities/media-entity');

const {postGres} = require('servercore/postgres/postgresPipe');


// --------------- Let add the basic table --------------------
// Mayby ask for a better generated ID
postGres.addCreateTable(
    `CREATE TABLE IF NOT EXISTS user (
        id INT GENERATED ALWAYS AS IDENTITY
        (START WITH 24 INCREMENT BY 2),
        title STRING,
        description STRING,
        creator STRING,
        authorization STRING,
        size INT,
        fileName STRING,
        tags STRING,
        rating INT,
        numberRating INT,
        numberView INT,
    )`
);

// ------------- And then let modify them ------------------------
postGres.addModifyTable(
    `` //TODO
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

}

module.exports = MediaDao;