const JsUtil = require('servercore/util/js-util');

const BaseEntity = require('./base-entity');

/**
 * @description entity for making query.
 */
class PostgresQueryEntity extends BaseEntity{
    
    /** @param {PostgresQueryEntity} params*/
    constructor(params){
        super();
        
        /** @type {string} */
        this.command = JsUtil.defaultIfNothing(params.command);

        /** @type {*[]} */
        this.parameters = JsUtil.defaultIfNothing(params.parameters);
    
    }
    
}

module.exports = PostgresQueryEntity;