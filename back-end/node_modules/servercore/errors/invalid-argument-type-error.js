const BaseError = require('./base-error');

/** @description Raised when a passed argument is of a invalid type */
class InvalidArgumentTypeError extends BaseError {

    /**
     * @param {string} argumentName - The name of the argument.
     * 
     * @param {string} expected - The expected type.
     * 
     * @param {string} actual - The actual type.
     */
    constructor(argumentName, expected, actual) {
        super(`${argumentName} is ${actual} type instead of ${expected} type!`);
    }
}

module.exports = InvalidArgumentTypeError;