const JsUtil = require('servercore/util/js-util');

const BaseIdEntity = require('servercore/entities/base-id-entity');

/**
 * @description
 */
class AuthorizationEntity extends BaseIdEntity{
    /**
     * 
     * @param {AuthorizationEntity} params
     */
    constructor(params){
        super();


        /** @type {UserDto} */
        this.creator = JsUtil.undefinedIfNothing(params.creator);

        /** @type {string} */
        this.authorization = JsUtil.undefinedIfNothing(params.authorization);
    }
}

module.exports = AuthorizationEntity;