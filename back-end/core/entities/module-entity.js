const JsUtil = require('servercore/util/js-util');

const BaseIdEntity = require('./base-id-entity');

const ImageEntity = require('module/image/entities/image-entity');

/**
 * @description entity for making module.
 */ 
//TODO explain this better !
class ModuleEntity extends BaseIdEntity{
    
    /** @param {ModuleEntity} params*/
    constructor(params){
        super();
        
        /** @type {string} */
        this.title = JsUtil.defaultIfNothing(params.title);

        /** @type {string} */
        this.description = JsUtil.defaultIfNothing(params.description);

        /** @type {ImageEntity} */
        this.logo = JsUtil.defaultIfNothing(params.logo);
    }
    
}

module.exports = ModuleEntity;