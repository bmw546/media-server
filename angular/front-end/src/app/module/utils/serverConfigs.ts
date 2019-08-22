import {Injectable} from "@angular/core";


@Injectable()
export class ServerConfig{

    private readonly host: string = 'localhost:4200/';

    public constructor(host: string) {
      this.host = host;
    }

    public get ServerHost(): string {
        return this.host;
    }

}