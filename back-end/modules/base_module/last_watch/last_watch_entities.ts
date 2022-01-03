import { BaseEntity } from "modules/core/entities/base-entity";

export class lastWatch implements BaseEntity{
    fromResult(result: any) {
        this.userId = result.userId;
        this.ipAddress = result.ipAddress;
        this.lastWatchId = result.lastWatchId;
        this.lastMediaId = result.lastMediaId;
        this.lastMediaTime = result.lastMediaTime;
    }
    lastWatchId: number | undefined;
    lastMediaId: number | undefined;
    lastMediaTime: number | undefined;

    userId: number | undefined;
    ipAddress: number | undefined;
}