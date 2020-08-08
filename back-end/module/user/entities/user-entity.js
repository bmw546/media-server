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
        params = JsUtil.defaultIfNothing(params, {});

        super(params);

        /** @type {string} */
        this.username = JsUtil.defaultIfNothing(params.username, 'Guest');

        // An array of PageSetting
        /** @type {PageSettingDto[]} */
        this.selectedPageSettings = JsUtil.defaultIfNothing(params.selectedPageSettings, '[{DEFAULT PAGE SETTING}]');

        /** @type {ImageDto} */
        this.avatarImage = JsUtil.defaultIfNothing(params.avatarImage, 'GuestProfileImageDto');

        /** @type {SessionDto} */
        this.session = JsUtil.defaultIfNothing(params.session);

        /** @type {string} */
        this.saltedUserNamePassword = JsUtil.defaultIfNothing(params.saltedUserNamePassword);

        /** @type {number} */
        this.auth0Id = JsUtil.defaultIfNothing(params.auth0Id);

        /** @type {string} */
        this.email = JsUtil.defaultIfNothing(params.email);

        // -------------- Here will be what the user last saw ------------------ //
        /** @type {number} */
        this.lastMediaId = JsUtil.defaultIfNothing(params.lastMediaId);

        /** @type {number} */
        this.lastMediaTime = JsUtil.defaultIfNothing(params.lastMediaTime);

    }
    
}

module.exports = UserEntity;