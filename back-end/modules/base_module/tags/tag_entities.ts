import { BaseEntity } from "modules/core/entities/base-entity";

export class tag implements BaseEntity{
    fromResult(result: any) {
        this.id = result.id;
        this.nom = result.nom;
        this.description = result.description;
    }
    id: number | undefined;
    nom: string | undefined;
    description: string | undefined;
}