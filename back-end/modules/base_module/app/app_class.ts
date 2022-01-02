import { BaseClass } from '../../core/class/base-id-class';
import { app } from './app_entities';
import "../postgres/postgresPipe";

export class appClass implements BaseClass{
    get(id: number) {
        throw new Error('Method not implemented.');
    }
    set(object: app) {
        throw new Error('Method not implemented.');
    }
    delete(object: app) {
        throw new Error('Method not implemented.');
    }
    modify(object: app) {
        throw new Error('Method not implemented.');
    }
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
