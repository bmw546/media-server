import { PostgresQueryEntity } from 'modules/core/entities/postgres-query-entity';
import { BaseClass } from '../../core/class/base-id-class';
import { permissionGroup } from './user-groups_entities';

export class permissionGroupClass implements BaseClass{
    tableName: string = "permissionGroup";

    get(id: number) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'SELECT * FROM ' + this.tableName + ' WHERE groupId = $1';
        query.parameters = [`${id}`];
        return new permissionGroup().fromResult(postGres.executeQuery(query));
    }

    getPermissionId(id: number) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'SELECT * FROM ' + this.tableName + ' WHERE permissionId = $1';
        query.parameters = [`${id}`];
        return new permissionGroup().fromResult(postGres.executeQuery(query));
    }

    set(object: permissionGroup) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'INSERT INTO ' + this.tableName + 
        `(permissionId, groupId)
        ($1, $2)`;
        query.parameters = [`${object.permissionId}`, `${object.groupId}`];
        return postGres.executeQuery(query);
    }

    // delete with groupId
    delete(object: permissionGroup) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'DELETE FROM ' + this.tableName + ' WHERE groupId = $1';
        query.parameters = [`${object.groupId}`];
        return postGres.executeQuery(query);
    }
    modify(object: permissionGroup) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'UPDATE INTO ' + this.tableName + ` SET permissionId = $1, groupId = $2`; 
        query.parameters = [`${object.permissionId}`, `${object.groupId}`];
        return postGres.executeQuery(query);
    }
    getCreateQuery(): string {
        return `CREATE TABLE ${this.tableName} (
            permissionId INT NOT NULL,
            groupId INT NOT NULL,
        );`;
    }
    getDeleteQuery(): string {
        return `DELETE TABLE ${this.tableName}`;
    }
}
