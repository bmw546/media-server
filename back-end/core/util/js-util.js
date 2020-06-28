var lodash = require('lodash');
//lodash wiki : https://lodash.com/docs/4.17.15#isNil

class JsUtil{

    /**
     * @description Check if the value is nil (null/undefined) will return the default value or undefined per default.
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