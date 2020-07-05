const IBaseDao = require('servercore/dao/i-base-dao');

const ImageFormatEntity = require('../entities/image-format-entity');

const {postGres} = require('servercore/postgres/postgresPipe');


// --------------- Let add the basic table --------------------
// Maybe ask for a better generated ID
postGres.addCreateTable(
    `CREATE TABLE IF NOT EXISTS imageFormat (
        id INT GENERATED ALWAYS AS IDENTITY,
        name STRING,
        description STRING
    )`
);

class ImageFormatDao extends IBaseDao{
    
    /**
     * Search and return the image format with the corresponding id.
     * @param {number} id - The id of the image format. 
     */
    select(id){

    }


    /**
     * Add a image format to the database and return it with it new id.
     * @param {ImageFormatEntity} imageFormat - The image format to add.
     */
    commit(imageFormat){

    }

    /**
     * Modify a image format to the database.
     * @param {ImageFormatEntity} imageFormat 
     */
    modify(imageFormat){

    }


    /**
     * @description Delete a image format to the database.
     * @param {ImageFormatEntity} imageFormat 
     */
    delete(imageFormat){

    }

}

module.exports = ImageFormatDao; 