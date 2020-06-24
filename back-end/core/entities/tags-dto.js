const BaseDto = require('./base-dto');

/**
 * @description dto for tags
 */
class TagsDto extends BaseDto{
    
    /** @param {TagsDto} params*/
    constructor(params){
        super();
        
        /** @type {UserDto} */
        this.creator = JsUtil.undefinedIfNothing(params.creator);

        /** @type {string} */
        this.name = JsUtil.undefinedIfNothing(params.name);
    
    }
    
}

module.exports = TagsDto;