import { PostgresQueryEntity } from 'modules/core/entities/postgres-query-entity';
import { BaseClass } from '../../core/class/base-id-class';
import { lastWatch } from './last_watch_entities';

export class lastWatchClass implements BaseClass{
    tableName: string = "lastWatch";

    get(id: number) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'SELECT * FROM ' + this.tableName + ' WHERE lastWatchId = $1';
        query.parameters = [`${id}`];
        return new lastWatch().fromResult(postGres.executeQuery(query));
    }
    set(object: lastWatch) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'INSERT INTO ' + this.tableName + `(userId, ipAddress, lastMediaTime, lastMediaId, lastWatchId)
        ($1, $2, $3, $4, $5)`;
        query.parameters = [`${object.userId}`, `${object.ipAddress}`, `${object.lastMediaTime}`, `${object.lastMediaId}`, `${object.lastWatchId}`];
        return postGres.executeQuery(query);
    }
    delete(object: lastWatch) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'DELETE FROM ' + this.tableName + ' WHERE groupId = $1';
        query.parameters = [`${object.lastWatchId}`];
        return postGres.executeQuery(query);
    }
    modify(object: any) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'UPDATE INTO ' + this.tableName + ` SET userId = $1, ipAddress = $2, lastMediaTime = $3, lastMediaId = $4, lastWatchId = $5`;
        query.parameters = [`${object.userId}`, `${object.ipAddress}`, `${object.lastMediaTime}`, `${object.lastMediaId}`, `${object.lastWatchId}`];
        return postGres.executeQuery(query);
    }
    getCreateQuery(): string {
        return `CREATE TABLE ${this.tableName} (
            
            userId INT,
            ipAddress INT,
            
            lastMediaTime INT NOT NULL,
            lastMediaId INT NOT NULL,
            lastWatchId INT NOT NULL,
            PRIMARY KEY (groupId)
        );`;
    }
    getDeleteQuery(): string {
        return `DELETE TABLE ${this.tableName}`;
    }
}
    