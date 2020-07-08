const JsUtil = require('servercore/util/js-util');

const BaseIdEntity = require('./base-id-entity');

const ImageEntity = require('module/image/entities/image-entity');

/**
 * @description entity for making module.
 */
class ModuleEntity extends BaseIdEntity{
    
    /** @param {ModuleEntity} params*/
    constructor(params){
        super();
        
        /** @type {string} */
        this.title = JsUtil.undefinedIfNothing(params.title);

        /** @type {string} */
        this.description = JsUtil.undefinedIfNothing(params.description);

        /** @type {ImageEntity} */
        this.logo = JsUtil.undefinedIfNothing(params.logo);
    }
    
}

module.exports = ModuleEntity;