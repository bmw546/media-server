import { BaseEntity } from "modules/core/entities/base-entity";

export class app implements BaseEntity{
    fromResult(result: any) {
        this.id = result.id;
        this.mediaId = result.idMedia;
        this.defaultThemeId = result.defaultThemeId;
        this.nom = result.nom;
        this.description = result.description;
    }

    id: number | undefined;
    mediaId: number | undefined;
    defaultThemeId: number | undefined;
    nom: string | undefined;
    description: string | undefined;
}