import { BaseClass } from '../../core/class/base-id-class';

export class permissionClass implements BaseClass{
    getCreateQuery(): string {
        return `CREATE TABLE permissions (
            permission_access_id INT NOT NULL,
            permission_access_type INT NOT NULL,
            
            permission_func VARCHAR(600) NOT NULL,
            read BOOLEAN NOT NULL,
            write BOOLEAN NOT NULL,
            delete BOOLEAN NOT NULL,
            
            PRIMARY KEY (permissionId)
        );`;
    }
    getDeleteQuery(): string {
        return "DELETE TABLE permissions";
    }
}