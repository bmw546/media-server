import { BaseClass } from '../../core/class/base-id-class';

export class mediaClass implements BaseClass{
    getCreateQuery(): string {
        return `CREATE TABLE media(
            id INT NOT NULL,
            date_creation DATE NOT NULL,
            type VARCHAR(42) NOT NULL,
            taille INT NOT NULL,
            longueur INT,
            thumbnail_mediaId INT,
            nom VARCHAR(100) NOT NULL,
            mediaPath VARCHAR(350) NOT NULL
        );`;
    }
    getDeleteQuery(): string {
        return "DELETE TABLE media";
    }
}
