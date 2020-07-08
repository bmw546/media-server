const IBaseDao = require('servercore/dao/i-base-dao');

const TagsEntity = require('../entities/tags-entity');

const {postGres} = require('servercore/postgres/postgresPipe');


// --------------- Let add the basic table --------------------
// Maybe ask for a better generated ID
postGres.addCreateTable(
    `CREATE TABLE IF NOT EXISTS tag (
        id INT GENERATED ALWAYS AS IDENTITY,
        name STRING
    )`
);

// ------------- And then let modify them ------------------------
postGres.addModifyTable(
    `ALTER TABLE tag ADD CONSTRAIN fk_creator FOREIGN KEY (creator) REFERENCES user (id) ON UPDATE CASCADE ON DELETE SET NULL`
);
class TagsDao extends IBaseDao{
    
    /**
     * Search and return the tag with the corresponding id.
     * @param {number} id - The id of the tag. 
     */
    select(id){

    }


    /**
     * Add a tag to the database and return it with it new id.
     * @param {TagsEntity} tags - The tag to add.
     */
    commit(tags){

    }

    /**
     * Modify a tags to the database.
     * @param {TagsEntity} tags 
     */
    modify(tags){

    }


    /**
     * @description Delete a tags to the database.
     * @param {TagsEntity} tags 
     */
    delete(tags){

    }

}

module.exports = TagsDao;