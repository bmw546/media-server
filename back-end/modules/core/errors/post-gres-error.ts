import JsUtil = require("../util/js-util")
import {BaseError} from './base-error';
import PostgresQueryEntity = require("../entities/postgres-query-entity");
/**
 * @description Error for not implemented function.
 */
export class PostGresError extends BaseError{

    /** @param {PostgresQueryEntity} query -The name of the non implemented function. */
    constructor(query){
        super(`Post Gres error ! Trying to execute this command : ${query.command} with those parameters [${query.parameters}] !`,
        "The requested post gres function does not exist");
    }
}