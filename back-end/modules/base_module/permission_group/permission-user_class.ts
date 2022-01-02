import { BaseClass } from '../../core/class/base-id-class';

export class permissionGroupClass implements BaseClass{
    getCreateQuery(): string {
        return `CREATE TABLE permissionGroup (
            permissionId INT NOT NULL,
            groupId INT NOT NULL,
        );`;
    }
    getDeleteQuery(): string {
        return "DELETE TABLE permissionGroup";
    }
}
