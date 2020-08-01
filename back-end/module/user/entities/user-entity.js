const JsUtil = require('servercore/util/js-util');

// 'Normal' Base Entity
const BaseIdEntity = require('servercore/entities/base-id-entity');

//TODO selectedPageSettingDto, ImageDto, SessionDto

/**
 * @description Dto that will hold the user.
 */
class UserEntity extends BaseIdEntity{
    
    /** @param {UserEntity} params*/
    constructor(params){
        super();

        /** @type {string} */
        this.username = JsUtil.undefinedIfNothing(params.username, 'Guest');

        // An array of PageSetting
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
        this.lastMediaId = JsUtil.undefinedIfNothing(params.lastMediaId);

        /** @type {number} */
        this.lastMediaTime = JsUtil.undefinedIfNothing(params.lastMediaTime);

    }
    
}

module.exports = UserEntity;