const JsUtil = require('servercore/util/js-util');

const BaseIdEntity = require('servercore/entities/base-id-entity');


/**
 * @description This is the dto that will contain the type of media (image,video,etc ...)
 */
class MediaTypeEntity  extends BaseIdEntity{

    /** @param {MediaTypeEntities} params */
    constructor(params){
        params = JsUtil.defaultIfNothing(params, {});

        super(params);

        params = JsUtil.defaultIfNothing(params, {});

        /** @type {string} */
        this.name = JsUtil.defaultIfNothing(params.name);

    }

}
module.exports = MediaTypeEntity;