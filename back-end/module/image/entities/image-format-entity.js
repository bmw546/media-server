const JsUtil = require('servercore/util/js-util');

const BaseIdEntity = require('servercore/entities/base-id-entity');

/**
 * @description entity for the image format (.png, etc ...)
 */
class ImageFormatEntity extends BaseIdEntity{
    
    /** @param {ImageFormatEntity} params*/
    constructor(params){
        super();
        
        /** @type {string} */
        this.name = JsUtil.undefinedIfNothing(params.name);

        /** @type {string} */
        this.description = JsUtil.undefinedIfNothing(params.description);
    
    }
    
}

module.exports = ImageFormatEntity;