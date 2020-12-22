import { BaseIdEntity } from "modules/core/entities/base-id-entity";
import {RoleEntity} from "modules/user/entities/role-entity";

/**
 * @description
 */
export interface AuthorizationEntity extends BaseIdEntity{
    role: RoleEntity;
    authorization: string;
    condition: string;
}