const JsUtil = require('servercore/util/js-util');

const BaseIdEntity = require('servercore/entities/base-id-entity');

const ResolutionEntity = require('./resolution-entity');
const AuthorizationEntity = require('module/authorization/entities/authorization-entity');

const UserEntity = require('module/user/entities/user-entity');

const TagsEntity = require('../entities/tags-entity');
const MediaTypeEntities = require('../entities/media-type-entity');


/**
 * @description This is the 'main' dto for all media (image/video/music)
 */
class MediaEntity  extends BaseIdEntity{

    /** @param {MediaEntity} params */
    constructor(params){
        params = JsUtil.defaultIfNothing(params, {});

        super(params);

        /** @type {string} */
        this.title = JsUtil.defaultIfNothing(params.title);

        /** @type {string} */
        this.description = JsUtil.defaultIfNothing(params.description);

        /** @type {UserEntity} */
        this.creator = JsUtil.defaultIfNothing(params.creator);

        /** @type {AuthorizationEntity[]} */
        this.authorization = JsUtil.defaultIfNothing(params.authorization);

        /** @type {number} */
        this.size = JsUtil.defaultIfNothing(params.size);

        /** @type {string} */
        this.fileName = JsUtil.defaultIfNothing(params.fileName);

        /** @type {TagsEntity[]} */
        this.tags = JsUtil.defaultIfNothing(params.tags);

        /** @type {number} */
        this.rating = JsUtil.defaultIfNothing(params.rating);

        /** @type {number} */
        this.numberRating = JsUtil.defaultIfNothing(params.numberRating);

        /** @type {number} */
        this.numberView = JsUtil.defaultIfNothing(params.numberView);

        // The type of the media only here to help query get faster.
        /** @type {MediaTypeEntities} */
        this.mediaTypeEntity = JsUtil.defaultIfNothing(params.mediaTypeEntity);
    }

}
module.exports = MediaEntity;