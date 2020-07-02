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
        this.query = JsUtil.undefinedIfNothing(params.query);

        /** @type {*[]} */
        this.parameters = JsUtil.undefinedIfNothing(params.parameters);
    
    }
    
}

module.exports = PostgresQueryEntity;