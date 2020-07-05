const JsUtil = require('servercore/util/js-util');

const BaseIdEntity = require('./base-id-entity');

const ImageEntity = require('module/image/entities/image-entity');

const UserEntity = require('module/user/entities/user-entity');

const ModuleEntity = require('./module-entity');

/**
 * @description entity for making module.
 */
class PageSettingEntity extends BaseIdEntity{
    
    /** @param {PageSettingEntity} params*/
    constructor(params){
        super();
        
        /** @type {string} */
        this.styleName = JsUtil.undefinedIfNothing(params.styleName);

        /** @type {string} */
        this.foreground = JsUtil.undefinedIfNothing(params.foreground);

        /** @type {string} */
        this.background = JsUtil.undefinedIfNothing(params.background);

        /** @type {string} */
        this.text = JsUtil.undefinedIfNothing(params.text);

        /**@type {string} */
        this.button = JsUtil.undefinedIfNothing(params.button);

        /** @type {UserEntity} */
        this.creator = JsUtil.undefinedIfNothing(params.creator);

        /** @type {string} */
        this.options = JsUtil.undefinedIfNothing(params.options);

        /** @type {ImageEntity} */
        this.backgroundImage = JsUtil.undefinedIfNothing(params.backgroundImage);

        /** @type {ModuleEntity} */
        this.module = JsUtil.undefinedIfNothing(params.module);
    }
    
}

module.exports = PageSettingEntity;