const JsUtil = require('servercore/util/js-util');

const BaseIdEntity = require('servercore/entities/base-id-entity');


/**
 * @description This is the dto that will contain the type of media (image,video,etc ...)
 */
class MediaTypeEntity  extends BaseIdEntity{

    /** @param {MediaTypeEntities} params */
    constructor(params){

        super();

        params = JsUtil.undefinedIfNothing(params, {});

        /** @type {string} */
        this.name = JsUtil.undefinedIfNothing(params.name);

    }

}
module.exports = MediaTypeEntity;