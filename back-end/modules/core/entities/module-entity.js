const JsUtil = require('back-end/modules/core/util/js-util');

const BaseIdEntity = require('./base-id-entity');

const ImageEntity = require('back-end/modules/image/entities/image-entity');

/**
 * @description entity for making module.
 */ 
//TODO explain this better !
class ModuleEntity extends BaseIdEntity{
    
    /** @param {ModuleEntity} params*/
    constructor(params){

        params = JsUtil.defaultIfNothing(params, {});

        super(params);

        /** @type {string} */
        this.title = JsUtil.defaultIfNothing(params.title);

        /** @type {string} */
        this.description = JsUtil.defaultIfNothing(params.description);

        /** @type {ImageEntity} */
        this.logo = JsUtil.defaultIfNothing(params.logo);
    }
    
}

module.exports = ModuleEntity;