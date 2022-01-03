import { BaseEntity } from "modules/core/entities/base-entity";

export class permissionGroup implements BaseEntity{
    fromResult(result: any) {
        this.permissionId = result.permissionId;
        this.groupId = result.groupId;
    }
    permissionId: number | undefined;
    groupId: number | undefined;
}