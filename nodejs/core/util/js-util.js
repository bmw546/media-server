
/**
 * @description A bunch of javascript function for the rest of the program.
 */
class JsUtil{

    /**
     * @public
     * 
     * @description return 'undefined' or the default value if the value is undefined.
     * 
     * @param {*} value The value to check.
     * 
     * @param {*} defaultValue  The default value to return if the value is undefined. Will return undefined if value and defaultValue are undefined.
     * 
     * @returns{*|undefined}
     */
    static undefinedIfNothing(value, defaultValue){
        return value||defaultValue || undefined;
    }
    
}

module.exports = JsUtil;