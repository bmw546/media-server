const IBaseDao = require('servercore/dao/i-base-dao');

const PageSettingEntity = require('../entities/page-setting-entity');

const {postGres} = require('servercore/postgres/postgresPipe');


// --------------- Let add the basic table --------------------
// Maybe ask for a better generated ID
postGres.addCreateTable(
    `CREATE TABLE IF NOT EXISTS pageSetting (
        id INT GENERATED ALWAYS AS IDENTITY,
        styleName STRING,
        foreground STRING,
        background STRING,
        background STRING,
        text STRING,
        button STRING,
        creator INT,
        options STRING,
        backgroundImage INT,
        module INT
    )`
);

// And then let modify it so we can add the fk key
postGres.addModifyTable(
    `ALTER TABLE pageSetting 
        ADD CONSTRAINT fk_creator FOREIGN KEY (creator) REFERENCES user (id),
        ADD CONSTRAINT fk_backgroundImage FOREIGN KEY (backgroundImage) REFERENCES image (id),
        ADD CONSTRAINT fk_module FOREIGN KEY (module) REFERENCES module (id)
    `
);

class PageSettingDao extends IBaseDao{
    
    /**
     * Search and return the page setting with the corresponding id.
     * @param {number} id - The id of the page setting. 
     */
    select(id){

    }


    /**
     * Add a page setting to the database and return it with it new id.
     * @param {PageSettingEntity} pageSetting - The page setting to add.
     */
    commit(pageSetting){

    }

    /**
     * Modify a page setting to the database.
     * @param {PageSettingEntity} pageSetting 
     */
    modify(pageSetting){

    }


    /**
     * @description Delete a page setting to the database.
     * @param {PageSettingEntity} pageSetting 
     */
    delete(pageSetting){

    }

}

module.exports = PageSettingDao; 