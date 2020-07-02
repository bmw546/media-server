const JsUtil = require('servercore/util/js-util');

const BaseIdEntity = require('servercore/entities/base-id-entity');

const ResolutionEntity = require('./resolution-entity');
const AuthorizationEntity = require('../../authorization/authorization-entity');
const TagsEntity = require('servercore/entities/tags-entity');


/**
 * @description This is the 'main' dto for all media (image/video/music)
 */
class MediaEntities  extends BaseIdEntity{

    /** @param {MediaEntities} params */
    constructor(params){

        super();

        params = JsUtil.undefinedIfNothing(params, {});

        /** @type {string} */
        this.title = JsUtil.undefinedIfNothing(params.title);

        /** @type {string} */
        this.description = JsUtil.undefinedIfNothing(params.description);

        /** @type {user} */
        this.creator = JsUtil.undefinedIfNothing(params.creator);

        /** @type {AuthorizationDto} */
        this.authorization = JsUtil.undefinedIfNothing(params.authorization);

        /** @type {number} */
        this.size = JsUtil.undefinedIfNothing(params.size);

        /** @type {string} */
        this.fileName = JsUtil.undefinedIfNothing(params.fileName);

        /** @type {TagsDto} */
        this.tags = JsUtil.undefinedIfNothing(params.tags);

        /** @type {number} */
        this.rating = JsUtil.undefinedIfNothing(params.rating);

        /** @type {number} */
        this.numberRating = JsUtil.undefinedIfNothing(params.numberRating);

        /** @type {number} */
        this.numberView = JsUtil.undefinedIfNothing(params.numberView);

        /** @type {ResolutionDto} */
        this.resolution = JsUtil.undefinedIfNothing(params.resolution);

    }

}
module.exports = MediaEntities;