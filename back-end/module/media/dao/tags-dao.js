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
    async select(id){
        
        let selectResult = await this.baseSelect(id);

        return _createEntityFromResult(selectResult);
    }


    /**
     * Add a tag to the database and return it with it new id.
     * @param {TagsEntity} tags - The tag to add.
     */
    async commit(tags){
        tags = _convertEntityToDb(tags);

        return _createEntityFromResult(await this.baseCommit(id));
    }

    /**
     * Modify a tags to the database.
     * @param {TagsEntity} tags 
     */
    async modify(tags){
        tags = _convertEntityToDb(tags);

        return await this.baseModify(tags);
    }


    /**
     * @description Delete a tags to the database.
     * @param {number} id 
     */
    async delete(id){
        return await this.baseDelete(id);
    }

    /** @private */
    _createEntityFromResult(result){
        let tagEntity = new TagsDao(selectResult.rows[0]);
        tagEntity.creator = selectResult.rows[0].fk_creator;
        
        return tagEntity;
    }

    /** @private  */
    _convertEntityToDb(tags){
        tags.fk_creator = tags.creator.id;
        delete tags.creator;
        return tags;
    }
}

module.exports = TagsDao;