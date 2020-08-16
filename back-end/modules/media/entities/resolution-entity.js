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
        params = JsUtil.defaultIfNothing(params, {});

        super(params);

        /** @type {number} */
        this.height = JsUtil.defaultIfNothing(params.height);

        /** @type {number} */
        this.width = JsUtil.defaultIfNothing(params.width);
    }
}

module.exports = ResolutionEntity;