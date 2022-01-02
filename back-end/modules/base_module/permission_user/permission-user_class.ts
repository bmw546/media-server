import { BaseClass } from '../../core/class/base-id-class';

export class permissionUserClass implements BaseClass{
    getCreateQuery(): string {
        return `CREATE TABLE permissionUser (
            permissionId INT NOT NULL,
            userId INT NOT NULL,
        );`;
    }
    getDeleteQuery(): string {
        return "DELETE TABLE permissionUser";
    }
}
