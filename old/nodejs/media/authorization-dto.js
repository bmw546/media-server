const BaseDto = require('../core/base-dto');

/**
 * @description
 */
class AuthorizationDto extends BaseDto{
    /**
     * 
     * @param {AuthorizationDto} params
     */
    constructor(params){
        super();

        /** @type {UserDto} */
        this.creator = JsUtil.undefinedIfNothing(params.creator);

        /** @type {string} */
        this.authorization = JsUtil.undefinedIfNothing(params.authorization);
    }
}

module.exports = AuthorizationDto;