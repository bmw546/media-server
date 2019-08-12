import { Injectable } from '@angular/core';

import {Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ServerConfig } from './serverConfigs';

@Injectable({
  providedIn: 'root'
})
export class HttpFactoryService {
  constructor(private http: HttpClient, private configServer: ServerConfig) { };


  public getOne(url: string, object: object, header) {
    return this.http.get<Object >(
      "http://" + this.configServer.ServerHost + url,
      header
    ).pipe{
      map(object => { return object})
    }

    }

  }
  
}
