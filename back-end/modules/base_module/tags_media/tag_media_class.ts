import { BaseClass } from '../../core/class/base-id-class';

export class tagMediaClass implements BaseClass{
    get(id: number) {
        throw new Error('Method not implemented.');
    }
    set(object: any) {
        throw new Error('Method not implemented.');
    }
    delete(object: any) {
        throw new Error('Method not implemented.');
    }
    modify(object: any) {
        throw new Error('Method not implemented.');
    }
    getCreateQuery(): string {
        return `CREATE TABLE tagMedia(
            idTag INT NOT NULL,
            idMedia INT NOT NULL,
        );`;
    }
    getDeleteQuery(): string {
        return "DELETE TABLE tagMedia";
    }
}
