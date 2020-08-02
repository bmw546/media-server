const JsUtil = require('servercore/util/js-util');

// 'Normal' Base Entity
const BaseIdEntity = require('servercore/entities/base-id-entity');

const MediaEntity = require('module/media/entities/media-entity');
const ResolutionEntity = require('./image-entity');

/**
 * @description Entity for an image.
 */
class ImageEntity extends BaseIdEntity{
    
    /** @param {ImageEntity} params*/
    constructor(params){
        super();

        /** @type {MediaEntity} */
        this.info = JsUtil.defaultIfNothing(params.info);

        /** @type {ImageFormatEntity} */
        this.format = JsUtil.defaultIfNothing(params.format);

        /** @type {ResolutionEntity} */
        this.resolution = JsUtil.defaultIfNothing(params.resolution);

    }
    
}

module.exports = ImageEntity;