const JsUtil = require('servercore/util/js-util');

const BaseEntity = require('servercore/entities/base-entity');

/**
 * @description entity for tags
 */
class TagsEntity extends BaseEntity{
    
    /** @param {TagsEntity} params*/
    constructor(params){
        super();
        
        /** @type {UserDto} */
        this.creator = JsUtil.defaultIfNothing(params.creator);

        /** @type {string} */
        this.name = JsUtil.defaultIfNothing(params.name);
    
    }
    
}

module.exports = TagsEntity;