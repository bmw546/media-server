import {ModuleEntity} from "./module-entity";

import { BaseIdEntity } from './base-id-entity';

import { ImageEntity } from 'modules/image/entities/image-entity';

import { UserEntity } from 'modules/user/entities/user-entity';

/** //TODO explain each entity why we use them. (see registrationToken long description)
 * @description The setting for a page. e.g Contain the info for theming the page.
 */
export interface PageSettingEntity extends BaseIdEntity{

    styleName: string

    foreground?: string

    background?: string

    text?: string

    button?: string

    creator?: UserEntity

    options?: string

    backgroundImage?: ImageEntity

    module?: ModuleEntity
    
}