import { BaseEntity } from "modules/core/entities/base-entity";

export class permissionUser implements BaseEntity{
    fromResult(result: any) {
        this.userId = result.userId;
        this.permissionId = result.permissionsId;
    }
    userId: number | undefined;
    permissionId: number | undefined;
}