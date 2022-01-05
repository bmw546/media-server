import { BaseEntity } from "modules/core/entities/base-entity";

export class tagMedia implements BaseEntity{
    fromResult(result: any) {
        this.idTag = result.idTag;
        this.idMedia = result.idMedia;
    }
    idTag: number | undefined;
    idMedia: number | undefined;
}