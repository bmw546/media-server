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
     * @description Convert an postgres result to an tags entity.
     * @param {*} result 
     */
    _buildEntity(result){
        let tagEntity = new TagsDao(result);
        tagEntity.creator = result.fk_creator;
        
        return tagEntity;
    }

    /**
     * @description Prepare an Tags entity for the data store.
     * @param {TagsDao} tags 
     */
    _prepare(tags){
        tags.fk_creator = tags.creator.id;
        delete tags.creator;
        return tags;
    }
}

module.exports = TagsDao;