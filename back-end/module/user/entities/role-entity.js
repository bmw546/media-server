const JsUtil = require('servercore/util/js-util');

// 'Normal' Base Entity
const BaseIdEntity = require('servercore/entities/base-id-entity');

/**
 * @description Dto that will hold the info for each role.
 */
class RoleEntity extends BaseIdEntity{
    
    /** @param {RoleEntity} params*/
    constructor(params){
        params = JsUtil.defaultIfNothing(params, {});

        super(params);

        /** @type {string} */
        this.title = JsUtil.defaultIfNothing(params.title, 'Guest');

        /** @type {string} */
        this.description = JsUtil.defaultIfNothing(params.description, 'A non registered user');
    }
    
}

module.exports = RoleEntity;