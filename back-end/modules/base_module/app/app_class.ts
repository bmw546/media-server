import { BaseClass } from '../../core/class/base-id-class';

export class tag implements BaseClass{
    getCreateQuery(): string {
        return `CREATE TABLE app(
            id INT NOT NULL,
            idMedia INT NOT NULL,
            nom VARCHAR(75) NOT NULL,
            description VARCHAR(75) NOT NULL,
            defaultThemeId INT NOT NULL,
        );`;
    }
    getDeleteQuery(): string {
        return "DELETE TABLE app";
    }
}
