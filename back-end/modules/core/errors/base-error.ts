/**
 * @description Base class for any errors specific to this system.
 */
export class BaseError extends Error{

    reason:string;
    name:string;
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