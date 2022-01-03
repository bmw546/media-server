import { PostgresQueryEntity } from 'modules/core/entities/postgres-query-entity';
import { BaseClass } from '../../core/class/base-id-class';
import { media } from './media_entities';

export class mediaClass implements BaseClass{
    tableName: string = "media";

    get(id: number) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'SELECT * FROM ' + this.tableName + ' WHERE id = $1';
        query.parameters = [`${id}`];
        return new media().fromResult(postGres.executeQuery(query));
    }
    
    set(object: media) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'INSERT INTO ' + this.tableName + `(id, dateCreation, type, taille, longueur, thumbnailMediaId, nom, mediaPath)
        ($1, $2, $3, $4, $5, $6, $7, $8)`;
        query.parameters = [`${object.id}`, `${object.dateCreation}`, `${object.type}`, `${object.taille}`, `${object.longueur}`, `${object.thumbnailMediaId}`, `${object.nom}`, `${object.mediaPath}`];
        return postGres.executeQuery(query);
    }

    delete(object: media) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'DELETE FROM ' + this.tableName + ' WHERE groupId = $1';
        query.parameters = [`${object.id}`];
        return postGres.executeQuery(query);
    }

    modify(object: media) {
        let query:PostgresQueryEntity;
        query = {} as PostgresQueryEntity;
        query.command = 'UPDATE INTO ' + this.tableName + ` SET id = $1, dateCreation = $2, type = $3, taille = $4, longueur = $5, thumbnailMediaId = $6, nom = $7, mediaPath = $8`;
        query.parameters = [`${object.id}`, `${object.dateCreation}`, `${object.type}`, `${object.taille}`, `${object.longueur}`, `${object.thumbnailMediaId}`, `${object.nom}`, `${object.mediaPath}`];
        return postGres.executeQuery(query);
    }

    getCreateQuery(): string {
        return `CREATE TABLE ${this.tableName}(
            id INT NOT NULL,
            dateCreation DATE NOT NULL,
            type VARCHAR(42) NOT NULL,
            taille INT NOT NULL,
            longueur INT,
            thumbnailMediaId INT,
            nom VARCHAR(100) NOT NULL,
            mediaPath VARCHAR(350) NOT NULL
        );`;
    }
    getDeleteQuery(): string {
        return `DELETE TABLE ${this.tableName}`;
    }
}
