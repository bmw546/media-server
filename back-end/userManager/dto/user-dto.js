// 'Normal' Base DTO
const BaseDto = require('../../core/base-dto');

//TODO selectedPageSettingDto, ImageDto, SessionDto

/**
 * @description Dto that will hold the user.
 */
class UserDto extends BaseDto{
    
    /** @param {UserDto} params*/
    constructor(params){
        super();

        /** @type {string} */
        this.username = JsUtil.undefinedIfNothing(params.username, 'Guest');

        /** @type {PageSettingDto[]} */
        this.selectedPageSettings = JsUtil.undefinedIfNothing(params.selectedPageSettings, '[{DEFAULT PAGE SETTING}]');

        /** @type {ImageDto} */
        this.avatarImage = JsUtil.undefinedIfNothing(params.avatarImage, 'GuestProfileImageDto');

        /** @type {SessionDto} */
        this.session = JsUtil.undefinedIfNothing(params.session);

        /** @type {string} */
        this.saltedUserNamePassword = JsUtil.undefinedIfNothing(params.saltedUserNamePassword);

        /** @type {number} */
        this.auth0Id = JsUtil.undefinedIfNothing(params.auth0Id);

        /** @type {string} */
        this.email = JsUtil.undefinedIfNothing(params.email);

        // -------------- Here will be what the user last saw ------------------ //
        /** @type {number} */
        this.lastMedia = JsUtil.undefinedIfNothing(params.lastMedia);

        /** @type {number} */
        this.time = JsUtil.undefinedIfNothing(params.time);

    }
    
}

module.exports = UserDto;