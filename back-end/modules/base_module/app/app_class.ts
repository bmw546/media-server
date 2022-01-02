import { BaseClass } from '../../core/class/base-id-class';
import { app } from './app_entities';
import "../postgres/postgresPipe";
import { PostgresQueryEntity } from 'modules/core/entities/postgres-query-entity';

export class appClass implements BaseClass{
    tableName: string = "app";
    async get(id: number) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'SELECT * FROM ' + this.tableName + ' WHERE id = $1';
        query.parameters = [`${id}`];
        return new app().fromResult(postGres.executeQuery(query));
    }
    async set(object: app) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'INSERT INTO ' + this.tableName + `(id,idMedia,nom,description,defaultThemeId)
        ($1, $2, $3, $4, $5)`;
        query.parameters = [`${object.id}`, `${object.mediaId}`, `${object.nom}`, `${object.description}`, `${object.defaultThemeId}`];
        return postGres.executeQuery(query);
    }
    async delete(object: app) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'DELETE FROM ' + this.tableName + ' WHERE id = $1';
        query.parameters = [`${object.id}`];
        return postGres.executeQuery(query);
    }
    async modify(object: app) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'UPDATE INTO ' + this.tableName + ` SET id = $1, idMedia = $2, nom = $3, description = $4, defaultThemeId = $5`;
        query.parameters = [`${object.id}`, `${object.mediaId}`, `${object.nom}`, `${object.description}`, `${object.defaultThemeId}`];
        return postGres.executeQuery(query);
    }
    getCreateQuery(): string {
        return `CREATE TABLE ${this.tableName}(
            id INT NOT NULL,
            idMedia INT NOT NULL,
            nom VARCHAR(75) NOT NULL,
            description VARCHAR(75) NOT NULL,
            defaultThemeId INT NOT NULL,
        );`;
    }
    getDeleteQuery(): string {
        return `DELETE TABLE  ${this.tableName}`;
    }
}
