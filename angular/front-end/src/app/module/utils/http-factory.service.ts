import { Injectable } from '@angular/core';

import {Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ServerConfig } from './serverConfigs';

import {ToolBox} from './toolBox';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class HttpFactoryService {
  constructor(private http: HttpClient, private configServer: ServerConfig) { };


  public getOne(url: string, object: object, header) {
    return this.http.get<Object>(
      "http://" + this.configServer.ServerHost + url,
      header
    )
    .pipe{
      map(
        stringifyObject => {
          return ToolBox.DeJsonObject(stringifyObject)
        }
      )
    }
    .catch((err: HttpErrorResponse) => {
      // simple logging, but you can do a lot more, see below
      console.error('An error occurred:', err.error);
    });

    }

  }
  
}
