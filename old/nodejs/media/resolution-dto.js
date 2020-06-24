const BaseDto = require('../core/base-dto');

/**
 * @description
 */
class ResolutionDto extends BaseDto{
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