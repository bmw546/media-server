import { PostgresQueryEntity } from 'modules/core/entities/postgres-query-entity';
import { BaseClass } from '../../core/class/base-id-class';
import { permissionUser } from './user-groups_entities';

export class permissionUserClass implements BaseClass{
    tableName: string = "permissionUser";

    get(id: number) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'SELECT * FROM ' + this.tableName + ' WHERE userId = $1';
        query.parameters = [`${id}`];
        return new permissionUser().fromResult(postGres.executeQuery(query));
    }

    getPermissionId(id: number) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'SELECT * FROM ' + this.tableName + ' WHERE permissionId = $1';
        query.parameters = [`${id}`];
        return new permissionUser().fromResult(postGres.executeQuery(query));
    }

    set(object: permissionUser) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'INSERT INTO ' + this.tableName + 
        `(permissionId, userId)
        ($1, $2)`;
        query.parameters = [`${object.permissionId}`, `${object.userId}`];
        return postGres.executeQuery(query);
    }

    // delete with userId
    delete(object: permissionUser) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'DELETE FROM ' + this.tableName + ' WHERE userId = $1';
        query.parameters = [`${object.userId}`];
        return postGres.executeQuery(query);
    }
    modify(object: permissionUser) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'UPDATE INTO ' + this.tableName + ` SET permissionId = $1, userId = $2`; 
        query.parameters = [`${object.permissionId}`, `${object.userId}`];
        return postGres.executeQuery(query);
    }
    getCreateQuery(): string {
        return `CREATE TABLE ${this.tableName} (
            permissionId INT NOT NULL,
            userId INT NOT NULL,
        );`;
    }
    getDeleteQuery(): string {
        return `DELETE TABLE ${this.tableName}`;
    }
}
