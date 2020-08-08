const JsUtil = require('servercore/util/js-util');
// 'Normal' Base entity

/**
 * @description Base with id
 */
class BaseIdEntity{

    /** @param {BaseIdEntity} params*/
    constructor(params){

        /** @type {number} */
        this.id = JsUtil.defaultIfNothing(params.id);

    }    
}

module.exports = BaseIdEntity;