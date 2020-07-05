const JsUtil = require('servercore/util/js-util');

// 'Normal' Base Entity
const BaseIdEntity = require('servercore/entities/base-id-entity');

const MediaEntity = require('../../media/entities/media-entity');
const ResolutionEntity = require('./image-entity');

/**
 * @description Entity for an image.
 */
class ImageEntity extends BaseIdEntity{
    
    /** @param {ImageEntity} params*/
    constructor(params){
        super();

        /** @type {MediaEntity} */
        this.info = JsUtil.undefinedIfNothing(params.info);

        /** @type {ImageFormatEntity} */
        this.format = JsUtil.undefinedIfNothing(params.format);

        /** @type {ResolutionEntity} */
        this.resolution = JsUtil.undefinedIfNothing(params.resolution);

    }
    
}

module.exports = ImageEntity;