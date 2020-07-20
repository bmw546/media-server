const JsUtil = require('servercore/util/js-util');

// 'Normal' Base Entity
const BaseIdEntity = require('servercore/entities/base-id-entity');

const MediaEntity = require('module/media/entities/media-entity');
const ResolutionEntity = require('./image-entity');

/**
 * @description Entity for an image.
 */
class SessionEntity extends BaseIdEntity{
    
    /** @param {SessionEntity} params*/
    constructor(params){
        super();

        /** @type {string} */
        this.uuid = JsUtil.undefinedIfNothing(params.uuid);

        /** @type {string} */
        this.ip = JsUtil.undefinedIfNothing(params.ip, `0.0.0.0`);

        /** @type {int} */
        this.userId = JsUtil.undefinedIfNothing(params.userId);

         /** @type {string} */
        this.rawAccessToken = JsUtil.undefinedIfNothing(params.rawAccessToken);

         /** @type {boolean} */
        this.isCancelled = JsUtil.undefinedIfNothing(params.rawAccessToken, false);

        /** @type {number} @description The time in unix when this session has been created */
        this.creationTime = JsUtil.undefinedIfNothing(params.creationTime);

        /** @type {number} @description The number of ms this session can live */
        this.timeToLive = JsUtil.undefinedIfNothing(params.timeToLive);
    }
    
}

module.exports = ImageEntity;