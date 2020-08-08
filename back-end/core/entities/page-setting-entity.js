const JsUtil = require('servercore/util/js-util');

const BaseIdEntity = require('./base-id-entity');

const ImageEntity = require('module/image/entities/image-entity');

const UserEntity = require('module/user/entities/user-entity');

const ModuleEntity = require('./module-entity');

/** //TODO explain each entity why we use them. (see registrationToken long description)
 * @description The setting for a page. e.g Contain the info for theming the page.
 */
class PageSettingEntity extends BaseIdEntity{
    
    /** @param {PageSettingEntity} params*/
    constructor(params){

        params = JsUtil.defaultIfNothing(params, {});

        super(params);
        
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