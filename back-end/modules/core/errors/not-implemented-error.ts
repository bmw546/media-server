import JsUtil = require("../util/js-util")
import {BaseError} from './base-error';

/**
 * @description Error for not implemented function.
 */
export class NotImplementedError extends BaseError{

    /** @param {string} functionName -The name of the non implemented function. */
    constructor(functionName: string){
        super(`${functionName} is not an implemented function`, "The requested function does not exist !");
    }
}