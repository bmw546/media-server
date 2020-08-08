const JsUtil = require('servercore/util/js-util');

const BaseIdEntity = require('servercore/entities/base-id-entity');

/**
 * @description entity for the image format (.png, etc ...)
 */
class ImageFormatEntity extends BaseIdEntity{
    
    /** @param {ImageFormatEntity} params*/
    constructor(params){
        params = JsUtil.defaultIfNothing(params, {});

        super(params);
        
        /** @type {string} */
        this.name = JsUtil.defaultIfNothing(params.name);

        /** @type {string} */
        this.description = JsUtil.defaultIfNothing(params.description);
    
    }
    
}

module.exports = ImageFormatEntity;