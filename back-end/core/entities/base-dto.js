// 'Normal' Base DTO

/**
 * @description Base dto 
 */
class BaseDto{
    
    /** @param {BaseDto} params*/
    constructor(params){
        
        /** @type {number} */
        this.id = JsUtil.undefinedIfNothing(params.id);
    
    }
    
}

module.exports = BaseDto;