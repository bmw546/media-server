const JsUtil = require('servercore/util/js-util');

const BaseIdEntity = require('servercore/entities/base-id-entity');

const RoleEntity = require('module/user/entities/role-entity');
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


        /** @type {RoleEntity} */
        this.role = JsUtil.undefinedIfNothing(params.role);

        /** @type {string} */
        this.authorization = JsUtil.undefinedIfNothing(params.authorization);


        /** @type {string} */
        this.condition = JsUtil.undefinedIfNothing(params.condition);
    }
}

module.exports = AuthorizationEntity;