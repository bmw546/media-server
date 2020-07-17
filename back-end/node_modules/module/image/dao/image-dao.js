const IBaseDao = require('servercore/dao/i-base-dao');

const ImageEntity = require('../entities/image-entity');
const ImageFormatEntity = require('../entities/image-format-entity');

const MediaEntity = require('module/media/entities/media-entity');
const ResolutionEntity = require('module/media/entities/resolution-entity');

const {postGres} = require('servercore/postgres/postgresPipe');

// --------------- Let add the basic table --------------------
postGres.addCreateTable(
    `CREATE TABLE IF NOT EXISTS image (
        id INT GENERATED ALWAYS AS IDENTITY,
        info int,
        format int,
        resolution int
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
     * @description prepare an image entity to send it to the data store.
     * @param {ImageEntity} imageEntity 
     */
    _prepare(imageEntity){
        
        imageEntity.info = imageEntity.info.id;
        imageEntity.format = imageEntity.format.id;
        imageEntity.resolution = imageEntity.resolution.id;

        return imageEntity;
    }

    /**
     * @description build an image entity from the result from postgres.
     * @param {*} result 
     */
    _buildEntity(result){
        let imageEntity = new ImageEntity(result);
        
        imageEntity.info = new MediaEntity({id: result.info});
        imageEntity.format = new ImageFormatEntity({id: result.format});
        imageEntity.resolution = new ResolutionEntity({id: result.resolution});

        return imageEntity;
    }

}

module.exports = ImageDao; 