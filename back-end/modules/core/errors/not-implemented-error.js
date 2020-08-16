const JsUtil = require("servercore/util/js-util");
const BaseError = require("./base-error");

/**
 * @description Error for not implemented function.
 */
class NotImplementedError extends BaseError{

    /** @param {string} functionName -The name of the non implemented function. */
    constructor(functionName){
        if (! (JsUtil.isString(functionName))) throw new Error(` ${functionName.name} isn't a string !`);
        super(`${functionName} is not an implemented function`);
    }
}

module.exports = NotImplementedError;