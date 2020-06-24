const JsUtil = require('../core/util/js-util');

const BaseDto = require('../core/base-dto');

const ResolutionDto = require('./resolution-dto');
const AuthorizationDto = require('../authorization-dto');
const TagsDto = require('../core/tags-dto');


/**
 * @description This is the 'main' dto for all media (image/video/music)
 */
class MediaDto  extends BaseDto{

    /** @param {MediaDto} params */
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
module.exports = MediaDto;