import {BaseError} from './base-error';

/** @description Raised when trying to access an unauthorized resource. */
export class UnauthorizedError extends BaseError {

    /**
     * @param {string} resource - The resource that was trying to access to.
     * 
     * @param {string} reason - The reason why this resource is unauthorized.
     */
    constructor(resource, reason) {
        super(`Cannot access this resource: ${resource} ! ${reason}`, "Unauthorized resource !");
    }
}