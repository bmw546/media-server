const BaseError = require('./base-error');

/** @description Raised when trying to access an resource that doesn't exist. */
class NotFoundError extends BaseError {

    /*** @param {string} resource - The resource that was trying to access to. */
    constructor(resource, reason) {
        super(`The following resource: ${resource} cannot be found ! ${reason}`);
    }
}

module.exports = NotFoundError;