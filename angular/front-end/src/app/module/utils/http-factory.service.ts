import { Injectable } from '@angular/core';

import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ServerConfig } from './serverConfigs';

import { ToolBox } from './toolBox';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class HttpFactoryService {
  constructor(private http: HttpClient, private configServer: ServerConfig) { };


  // TODO make a params object
  public post(url: string, object: object, params: object[] = null) {

    const body = ToolBox.JsonObject(object);

    var config = {};

    if(params !== null && params.length > 0) {
      let httpParams = new HttpParams();
      params.forEach(param =>{
        httpParams.append(param.key, param.value);
      });
      config = { headers: new HttpHeaders().set('Content-Type', 'application/json'), params:httpParams; };
    }else{
      config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    }
    

    return this.http.post<string>(
      'http://' + this.configServer.ServerHost + url, body, config
    ).pipe(
      map(stringifyObject => {
        return ToolBox.DeJsonObject(stringifyObject);
      }),
      catchError(error => {
        if (error.status === 404) {
          return of(null);
        } else { throw error; }

      }));
  }

  // see https://stackoverflow.com/questions/47936183/angular-file-upload/47938117#47938117
  // https://stackoverflow.com/questions/45530752/getting-image-from-api-in-angular-4-5
  public getImage(imageUrl: string): Observable<Blob> {
    return this.http.get(
      imageUrl, { responseType: 'blob' });
    }


  public PostFile(url:string, fileUpload: File){

  }
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
