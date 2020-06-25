const BaseIdDto = require('servercore/entities/base-id-dto');

/**
 * @description
 */
class ResolutionDto extends BaseIdDto{
    /**
     * 
     * @param {ResolutionDto} params
     */
    constructor(params){
        super();

        /** @type {number} */
        this.height = JsUtil.undefinedIfNothing(params.height);

        /** @type {number} */
        this.width = JsUtil.undefinedIfNothing(params.width);
    }
}

module.exports = ResolutionDto;