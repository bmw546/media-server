import { BaseClass } from '../../core/class/base-id-class';

export class userClass implements BaseClass{
    getCreateQuery(): string {
        return `CREATE TABLE user (
            email VARCHAR(200),
            nom VARCHAR(50),
            pwd VARCHAR(200),
            auth0Id VARCHAR(75),
            userId INT NOT NULL,
            PRIMARY KEY (userId)
        );`;
    }
    getDeleteQuery(): string {
        return "DELETE TABLE user";
    }
}
    