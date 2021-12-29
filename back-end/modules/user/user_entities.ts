import { BaseIdClass } from '../core/class/base-id-class';
export class User implements BaseIdClass{
    id: number | undefined;
    getCreateQuery(): string {
        return `CREATE TABLE User (
            email VARCHAR(200),
            nom VARCHAR(50),
            pwd VARCHAR(200),
            auth0Id VARCHAR(75),
            userId INT NOT NULL,
            PRIMARY KEY (userId)
        );`;
    }
    getDeleteQuery(): string {
        return "DELETE TABLE User";
    }
    email: string | undefined;
    nom: string | undefined;
    pwd?: string | undefined;
    auth0Id?: string | undefined;
    userId?: number | undefined;

    User(){}
}
