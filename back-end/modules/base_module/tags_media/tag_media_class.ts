import { PostgresQueryEntity } from 'modules/core/entities/postgres-query-entity';
import { BaseClass } from '../../core/class/base-id-class';
import { tagMedia } from './tag_media_entities';

export class tagMediaClass implements BaseClass{
    tableName: string = "tagMedia";

    get(id: number) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'SELECT * FROM ' + this.tableName + ' WHERE id = $1';
        query.parameters = [`${id}`];
        return new tagMedia().fromResult(postGres.executeQuery(query));
    }
    set(object: tagMedia) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'INSERT INTO ' + this.tableName + `(idTag, idMedia) ($1, $2)`;
        query.parameters = [`${object.idTag}`, `${object.idMedia}`];
        return postGres.executeQuery(query);
    }
    delete(object: tagMedia) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'DELETE FROM ' + this.tableName + ' WHERE idMedia = $1 AND idTag = $2';
        query.parameters = [`${object.idTag}`, `${object.idMedia}`];
        return postGres.executeQuery(query);
    }
    
    // maybe not use that !!!
    modify(object: tagMedia) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'UPDATE INTO ' + this.tableName + ` SET idMedia = $1, idTag = $2`; 
        query.parameters = [`${object.idTag}`, `${object.idMedia}`];
        return postGres.executeQuery(query);
    }

    getCreateQuery(): string {
        return `CREATE TABLE ${this.tableName} (
            idTag INT NOT NULL,
            idMedia INT NOT NULL,
        );`;
    }
    getDeleteQuery(): string {
        return `DELETE TABLE ${this.tableName}`;
    }
}
