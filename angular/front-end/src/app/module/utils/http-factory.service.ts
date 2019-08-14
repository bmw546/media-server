import { Injectable } from '@angular/core';

import {catchError, map} from 'rxjs/operators';
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


  public getOne(url: string, object: object, headers) {
    return this.http.get<object>("http://" + this.configServer.ServerHost + url, {headers}
    ).pipe(
      map(stringifyObject => {
        //return ToolBox.DeJsonObject(stringifyObject)
        return stringifyObject;
      }),
      catchError(error => {
        if( error.status === 404){
          return of(null)
        }else throw error
        
      })
      


  }

/*
  public getOne(url: string, object: object, header) {
    return this.http.get<object>(
      "http://" + this.configServer.ServerHost + url,
      ToolBox.JsonObject(object),
      header
    )
    .pipe{
      map(
        stringifyObject => {
          return ToolBox.DeJsonObject(stringifyObject)
        }
      )},
    .catch((err: HttpErrorResponse) => {
      // simple logging, but you can do a lot more, see below
      console.error('An error occurred:', err.error);
    });

    }

  }
  */
}
