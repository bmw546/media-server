import { BaseEntity } from "modules/core/entities/base-entity";

export class group implements BaseEntity{
    fromResult(result: any) {
        this.groupId = result.groupId;
        this.nom = result.nom;
        this.description = result.description;
        this.adminUserId = result.adminUserId;
    }
    groupId: number | undefined;
    nom: string | undefined;
    description: string | undefined;
    adminUserId: number | undefined;
}