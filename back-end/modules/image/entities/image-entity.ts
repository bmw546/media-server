import { BaseIdEntity } from "modules/core/entities/base-id-entity";
import {MediaEntity} from "modules/media/entities/media-entity";
import {ResolutionEntity} from "modules/media/entities/resolution-entity";
import { ImageFormatEntity } from "./image-format-entity";

/**
 * @description Entity for an image.
 */
export interface ImageEntity extends BaseIdEntity{

    info: MediaEntity;
    format: ImageFormatEntity;
    resolution: ResolutionEntity;

}