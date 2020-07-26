/**
 * @description Base error class for this system.
 */
class BaseError extends Error {

    /**
     * @param {string} [reason] - The error message.
     * @param {Error} [innerError] - The error that triggered this error.
     */
    constructor(reason, innerError) {
        super(reason || innerError && innerError.message);

        this.innerError = innerError;
        this.name = this.constructor.name;
    }
}

module.exports = BaseError;