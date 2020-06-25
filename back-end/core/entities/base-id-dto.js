// 'Normal' Base entity

/**
 * @description Base with id
 */
class BaseIdDto{

    /** @param {TagsDto} params*/
    constructor(params){
        
        /** @type {number} */
        this.id = JsUtil.undefinedIfNothing(params.id);

    }    
}

module.exports = BaseIdDto;