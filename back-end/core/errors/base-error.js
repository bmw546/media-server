/**
 * @description Base class for any errors specific to this system.
 */
class BaseError extends Error{

    /**
     * @param {*} reason - The reason of this error.
     * @param {*} innerReason  - The error that cause this error.
     */
    constructor(reason, innerReason){
        super(reason || innerReason && innerReason.message);

        this.name = this.constructor.name;
        this.reason = reason;

    }
}

module.exports = BaseError;