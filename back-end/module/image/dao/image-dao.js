const IBaseDao = require('servercore/dao/i-base-dao');

const ImageEntity = require('../entities/image-entity');

const {postGres} = require('servercore/postgres/postgresPipe');


// --------------- Let add the basic table --------------------
// Maybe ask for a better generated ID
postGres.addCreateTable(
    `CREATE TABLE IF NOT EXISTS image (
        id INT GENERATED ALWAYS AS IDENTITY,
        info STRING,
        format STRING,
        resolution STRING
    )`
);

// And then let modify it so we can add the fk key
postGres.addModifyTable(
    `ALTER TABLE image 
        ADD CONSTRAINT fk_info FOREIGN KEY (info) REFERENCES media (id) ON UPDATE CASCADE ON DELETE CASCADE,
        ADD CONSTRAINT fk_format FOREIGN KEY (format) REFERENCES imageFormat (id)  ON UPDATE CASCADE ON DELETE SET NULL,
        ADD CONSTRAINT fl_resolution FOREIGN KEY (resolution) REFERENCES resolution (id)  ON UPDATE CASCADE ON DELETE SET NULL,
    `
);

class ImageDao extends IBaseDao{
    
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

module.exports = ImageDao; 