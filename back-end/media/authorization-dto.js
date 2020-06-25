const BaseIdDto = require('servercore/entities/base-id-dto');

/**
 * @description
 */
class AuthorizationDto extends BaseIdDto{
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