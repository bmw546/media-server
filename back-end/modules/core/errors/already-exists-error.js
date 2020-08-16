const BaseError = require('./base-error');

/** @description Raised when trying to add a resource that already exists */
class AlreadyExistsError extends BaseError {

    /**
     * @param {string} resource - The resource that exists.
     * 
     * @param {string} reason - The reason why we cannot add another resource.
     */
    constructor(resource, reason) {
        super(`Cannot add this resource: ${resource} ! ${reason}`);
    }
}

module.exports = AlreadyExistsError;