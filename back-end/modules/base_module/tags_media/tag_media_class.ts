import { BaseClass } from '../../core/class/base-id-class';

export class tag implements BaseClass{
    getCreateQuery(): string {
        return `CREATE TABLE tagMedia(
            id INT NOT NULL,
            idTag INT NOT NULL,
            idMedia INT NOT NULL,
        );`;
    }
    getDeleteQuery(): string {
        return "DELETE TABLE tagMedia";
    }
}
