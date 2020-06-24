// 'Normal' Base entity

/**
 * @description Base with id
 * @entity 
 */
class BaseWithId{
    
    /** @param {BaseWithId} params*/
    constructor(params){
        
        /** @type {number} */
        this.id = JsUtil.undefinedIfNothing(params.id);
    
    }
    
}

module.exports = BaseWithId;