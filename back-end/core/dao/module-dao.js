const IBaseDao = require('servercore/dao/i-base-dao');

const ImageEntity = require('../entities/image-entity');

const {postGres} = require('servercore/postgres/postgresPipe');


// --------------- Let add the basic table --------------------
// Maybe ask for a better generated ID
postGres.addCreateTable(
    `CREATE TABLE IF NOT EXISTS module (
        id INT GENERATED ALWAYS AS IDENTITY,
        title STRING,
        description STRING,
        logo STRING
    )`
);

// And then let modify it so we can add the fk key
postGres.addModifyTable(
    `ALTER TABLE module ADD CONSTRAINT fk_logo FOREIGN KEY (logo) REFERENCES image (id) ON UPDATE CASCADE ON DELETE SET NULL`
);

class ModuleDao extends IBaseDao{
    
    /**
     * Search and return the image with the corresponding id.
     * @param {number} id - The id of the image. 
     */
    select(id){

    }


    /**
     * Add a image to the database and return it with it new id.
     * @param {ImageEntity} image - The image to add.
     */
    commit(image){

    }

    /**
     * Modify a image to the database.
     * @param {ImageEntity} image 
     */
    modify(image){

    }


    /**
     * @description Delete a image to the database.
     * @param {ImageEntity} image 
     */
    delete(image){

    }

}

module.exports = ModuleDao; 