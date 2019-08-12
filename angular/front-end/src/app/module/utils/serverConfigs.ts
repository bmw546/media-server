import {Injectable} from "@angular/core";


@Injectable()
export class ServerConfig{

    private readonly host: string = 'UNSET';

    public constructor(host: string) {
      this.host = host;
    }

    public get ServerHost(): string {
        return this.host;
    }

}