import { BaseEntity } from "modules/core/entities/base-entity";

export class permission implements BaseEntity{
    fromResult(result: any) {
        this.permissionId = result.permissionId;
        this.permissionFunc = result.permissionFunc;

        this.permissionAccessId = result.permissionAccessId;
        this.permissionAccessType = result.permissionAccessType;

        this.read = result.read;
        this.write = result.write;
        this.delete = this.delete;
    }
    permissionId: number | undefined;
    permissionFunc: number | undefined;

    permissionAccessId: number | undefined; // To what this give access to
    permissionAccessType: string | undefined; // To what it give access to (media/whatever)
    read: Boolean | undefined;
    write: Boolean | undefined;
    delete: Boolean | undefined;
}