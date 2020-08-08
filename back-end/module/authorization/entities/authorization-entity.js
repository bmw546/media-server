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
        params = JsUtil.defaultIfNothing(params, {});

        super(params);

        /** @type {RoleEntity} */
        this.role = JsUtil.defaultIfNothing(params.role);

        /** @type {string} */
        this.authorization = JsUtil.defaultIfNothing(params.authorization);

        /** @type {string} */
        this.condition = JsUtil.defaultIfNothing(params.condition);
    }
}

module.exports = AuthorizationEntity;