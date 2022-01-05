import { PostgresQueryEntity } from 'modules/core/entities/postgres-query-entity';
import { BaseClass } from '../../core/class/base-id-class';
import { tag } from './tag_entities';

export class tagClass implements BaseClass{
    tableName: string = "tag";

    get(id: number) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'SELECT * FROM ' + this.tableName + ' WHERE id = $1';
        query.parameters = [`${id}`];
        return new tag().fromResult(postGres.executeQuery(query));
    }
    set(object: tag) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'INSERT INTO ' + this.tableName + `(id, nom, description) ($1, $2)`;
        query.parameters = [`${object.id}`, `${object.nom}`, `${object.description}`];
        return postGres.executeQuery(query);
    }
    delete(object: tag) {
        throw new Error('Method not implemented.');
    }
    modify(object: tag) {
        throw new Error('Method not implemented.');
    }
    getCreateQuery(): string {
        return `CREATE TABLE tag(
            id INT NOT NULL,
            nom VARCHAR(75) NOT NULL,
            description VARCHAR(300) NOT NULL,
        );`;
    }
    getDeleteQuery(): string {
        return "DELETE TABLE tag";
    }
}
