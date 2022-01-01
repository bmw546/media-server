import { BaseClass } from '../../core/class/base-id-class';

export class tag implements BaseClass{
    getCreateQuery(): string {
        return `CREATE TABLE themeSelected(
            id INT NOT NULL,
            idTheme INT NOT NULL,   
            idUser INT NOT NULL,  
            idApp NOT NULL,
        );`;
    }
    getDeleteQuery(): string {
        return "DELETE TABLE themeSelected";
    }
}
