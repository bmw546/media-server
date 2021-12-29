import { BaseClass } from '../../core/class/base-id-class';

export class user_groupsClass implements BaseClass{
    getCreateQuery(): string {
        return `CREATE TABLE user_group (
            groupId INT NOT NULL,
            userId INT NOT NULL,
            PRIMARY KEY (userId)
        );`;
    }
    getDeleteQuery(): string {
        return "DELETE TABLE user_group";
    }
}
