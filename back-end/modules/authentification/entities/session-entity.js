const JsUtil = require('servercore/util/js-util');

// 'Normal' Base Entity
const BaseIdEntity = require('servercore/entities/base-id-entity');

/**
 * @description Entity for an session.
 */
class SessionEntity extends BaseIdEntity{
    
    /** @param {SessionEntity} params*/
    constructor(params){
        params = JsUtil.defaultIfNothing(params, {});

        super(params);

        /** @type {string} */
        this.uuid = JsUtil.defaultIfNothing(params.uuid);

        /** @type {string} */
        this.ip = JsUtil.defaultIfNothing(params.ip, `0.0.0.0`);

        /** @type {number} */
        this.userId = JsUtil.defaultIfNothing(params.userId);

         /** @type {string} */
        this.rawAccessToken = JsUtil.defaultIfNothing(params.rawAccessToken);

         /** @type {boolean} */
        this.isCancelled = JsUtil.defaultIfNothing(params.rawAccessToken, false);

        /** @type {number} @description The time in unix when this session has been created */
        this.creationTime = JsUtil.defaultIfNothing(params.creationTime);

        /** @type {number} @description The number of ms this session can live */
        this.timeToLive = JsUtil.defaultIfNothing(params.timeToLive);
    }
    
}

module.exports = SessionEntity;