const JsUtil = require('servercore/util/js-util');

const BaseIdEntity = require('servercore/entities/base-id-entity');

/**
 * @description
 */
class ResolutionEntity extends BaseIdEntity{
    /**
     * 
     * @param {ResolutionEntity} params
     */
    constructor(params){
        super();

        /** @type {number} */
        this.height = JsUtil.undefinedIfNothing(params.height);

        /** @type {number} */
        this.width = JsUtil.undefinedIfNothing(params.width);
    }
}

module.exports = ResolutionEntity;