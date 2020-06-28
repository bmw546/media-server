var lodash = require('lodash');

class JsUtil{

    /**
     * 
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value return undefined if not specified (is undefined/null). 
     */
    static undefinedIfNothing(value, defaultValue){
        
        if(lodash.isNil(value)){
            if(lodash.isNil(defaultValue)){
                return undefined;
            }else{
                return defaultValue;
            }
        }

        return value;
    }

}

module.exports = JsUtil;