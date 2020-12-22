import { BaseIdEntity } from "modules/core/entities/base-id-entity";

const JsUtil = require('servercore/util/js-util');

/**
 * @description entity for the image format (.png, etc ...)
 */
export interface ImageFormatEntity extends BaseIdEntity{
    name: string;
    description: string;
}