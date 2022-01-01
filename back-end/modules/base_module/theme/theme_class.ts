import { BaseClass } from '../../core/class/base-id-class';

export class tag implements BaseClass{
    getCreateQuery(): string {
        return `CREATE TABLE theme(
            id INT NOT NULL,
            idMedia INT NOT NULL,   
            creatorId INT NOT NULL,  
            nom VARCHAR(75) NOT NULL,
            description VARCHAR(500) NOT NULL,

            foreground VARCHAR(75) NOT NULL,
            background VARCHAR(75) NOT NULL,
            font_color VARCHAR(75) NOT NULL,
            font_family VARCHAR(75) NOT NULL,
            font-size VARCHAR(10) NOT NULL,
            font-variant VARCHAR(15) NOT NULL,
            visibility VARCHAR(10) NOT NULL,

        );`;
    }
    getDeleteQuery(): string {
        return "DELETE TABLE theme";
    }
}
