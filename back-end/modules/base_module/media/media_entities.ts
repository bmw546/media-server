import { BaseEntity } from "modules/core/entities/base-entity";

export class media implements BaseEntity{
    fromResult(result: any) {
        this.id = result.id;
        this.dateCreation = result.dateCreation;
        this.type = result.type;
        this.taille = result.taille;
        this.longueur = result.longueur;
        this.thumbnailMediaId = result.thumbnailMediaId;
        this.nom = result.nom;
        this.mediaPath = result.mediaPath;
    }
    id: number | undefined;
    dateCreation: Date | undefined;
    type: string | undefined;
    taille: number | undefined;
    longueur: number | undefined;
    thumbnailMediaId: number | undefined;
    nom: string | undefined;
    mediaPath: string | undefined;
}