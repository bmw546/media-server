import {BaseError} from "./base-error";

/** @description Raised when a passed argument is of a invalid type */
export class InvalidArgumentTypeError extends BaseError {

    /**
     * @param {string} argumentName - The name of the argument.
     * 
     * @param {string} expected - The expected type.
     * 
     * @param {string} actual - The actual type.
     */
    constructor(argumentName, expected, actual) {
        super(`${argumentName} is ${actual} type instead of ${expected} type!`, "Argument de type invalide !");
    }
}