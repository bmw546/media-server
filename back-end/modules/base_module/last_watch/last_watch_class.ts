import { BaseClass } from '../../core/class/base-id-class';

export class lastWatchClass implements BaseClass{
    getCreateQuery(): string {
        return `CREATE TABLE lastWatch (
            
            userId INT,
            ipAdresse INT,
            
            lastMediaTime INT NOT NULL,
            lastMediaId INT NOT NULL,
            lastWatchId INT NOT NULL,
            PRIMARY KEY (groupId)
        );`;
    }
    getDeleteQuery(): string {
        return "DELETE TABLE lastWatch";
    }
}
    