import { PostgresQueryEntity } from 'modules/core/entities/postgres-query-entity';
import { BaseClass } from '../../core/class/base-id-class';
import { permission } from './permission_entities';

export class permissionClass implements BaseClass{
    tableName: string = "permissions";

    get(id: number) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'SELECT * FROM ' + this.tableName + ' WHERE permissionAccessId = $1';
        query.parameters = [`${id}`];
        return new permission().fromResult(postGres.executeQuery(query));
    }
    set(object: permission) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'INSERT INTO ' + this.tableName + 
        `(permissionAccessId, permissionAccessType, permissionFunc, read, write, delete)
        ($1, $2, $3, $4, $5)`;
        query.parameters = [`${object.permissionAccessId}`, `${object.permissionAccessType}`, `${object.permissionFunc}`,
            `${object.read}`, `${object.write}`, `${object.delete}`];
        return postGres.executeQuery(query);
    }
    delete(object: permission) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'DELETE FROM ' + this.tableName + ' WHERE groupId = $1';
        query.parameters = [`${object.permissionAccessId}`];
        return postGres.executeQuery(query);
    }
    modify(object: permission) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'UPDATE INTO ' + this.tableName + ` SET permissionAccessId = $1, permissionAccessType = $2, permissionFunc = $3,
        read = $4, write = $5, delete = $6`;
        query.parameters = [`${object.permissionAccessId}`, `${object.permissionAccessType}`, `${object.permissionFunc}`,
            `${object.read}`, `${object.write}`, `${object.delete}`];
        return postGres.executeQuery(query);
    }
    getCreateQuery(): string {
        return `CREATE TABLE ${this.tableName} (
            permissionAccessId INT NOT NULL,
            permissionAccessType INT NOT NULL,
            
            permissionFunc VARCHAR(600) NOT NULL,
            read BOOLEAN NOT NULL,
            write BOOLEAN NOT NULL,
            delete BOOLEAN NOT NULL,
            
            PRIMARY KEY (permissionId)
        );`;
    }
    getDeleteQuery(): string {
        return `DELETE TABLE ${this.tableName}`;
    }
}