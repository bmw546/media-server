import { BaseClass } from '../../core/class/base-id-class';

export class tag implements BaseClass{
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
