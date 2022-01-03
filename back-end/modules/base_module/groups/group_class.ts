import { PostgresQueryEntity } from 'modules/core/entities/postgres-query-entity';
import { BaseClass } from '../../core/class/base-id-class';
import { group } from './group_entities';

export class groupClass implements BaseClass{
    tableName: string = "group";

    get(id: number) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'SELECT * FROM ' + this.tableName + ' WHERE groupId = $1';
        query.parameters = [`${id}`];
        return new group().fromResult(postGres.executeQuery(query));
    }
    
    set(object: group) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'INSERT INTO ' + this.tableName + `(groupId, nom, description, adminUserId)
        ($1, $2, $3, $4)`;
        query.parameters = [`${object.groupId}`, `${object.nom}`, `${object.description}`, `${object.adminUserId}`];
        return postGres.executeQuery(query);
    }
    delete(object: group) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'DELETE FROM ' + this.tableName + ' WHERE groupId = $1';
        query.parameters = [`${object.groupId}`];
        return postGres.executeQuery(query);
    }
    modify(object: group) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'UPDATE INTO ' + this.tableName + ` SET groupId = $1, nom = $2, description = $3, adminUserId = $4`;
        query.parameters = [`${object.groupId}`, `${object.nom}`, `${object.description}`, `${object.adminUserId}`];
        return postGres.executeQuery(query);
    }

    getCreateQuery(): string {
        return `CREATE TABLE ${this.tableName} (
            groupId INT NOT NULL,
            nom VARCHAR(75) NOT NULL,
            description VARCHAR(350) NOT NULL,
            adminUserId INT NOT NULL,
            PRIMARY KEY (groupId)
        );`;
    }
    getDeleteQuery(): string {
        return `DELETE TABLE ${this.tableName}`;
    }
}
    