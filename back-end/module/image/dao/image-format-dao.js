const IBaseDao = require('servercore/dao/i-base-dao');

const ImageFormatEntity = require('../entities/image-format-entity');

const {postGres} = require('servercore/postgres/postgresPipe');


/** @description The name of this dao table */
const name = "image_format";

// --------------- Let add the basic table --------------------
// Maybe ask for a better generated ID
postGres.addCreateTable(
    `CREATE TABLE IF NOT EXISTS ${name} (
        id serial primary key,
        name VARCHAR(100),
        description TEXT
    )`
);

class ImageFormatDao extends IBaseDao{
    
    /**
     * @description build an image format entity from an postgres result.
     * @param {*} result 
     */
    _buildEntity(result){
        return new ImageFormatEntity(result);
    }

}

module.exports = ImageFormatDao; 