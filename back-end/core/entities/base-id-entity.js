// 'Normal' Base entity

/**
 * @description Base with id
 * @entity 
 */
class BaseIdEntity{

    /** @param {TagsDto} params*/
    constructor(params){
        
        /** @type {number} */
        this.id = JsUtil.undefinedIfNothing(params.id);

    }    
}

module.exports = BaseIdEntity;