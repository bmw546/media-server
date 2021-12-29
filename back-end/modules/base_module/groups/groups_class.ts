import { BaseClass } from '../../core/class/base-id-class';

export class groupsClass implements BaseClass{
    getCreateQuery(): string {
        return `CREATE TABLE groups (
            nom VARCHAR(75) NOT NULL,
            description VARCHAR(350) NOT NULL,
            adminUserId INT NOT NULL,
            groupId INT NOT NULL,
            PRIMARY KEY (groupId)
        );`;
    }
    getDeleteQuery(): string {
        return "DELETE TABLE groups";
    }
}
    