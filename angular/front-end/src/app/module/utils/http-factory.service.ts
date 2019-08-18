import { Injectable } from '@angular/core';

import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
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

    const config = this.BuildHeaderJson(params);

    // HTTP REQUEST
    return this.http.post<string>(
      'http://' + this.configServer.ServerHost + url, body, config
    ).pipe(
      // Transform the object back to his entities form
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
  public getImage(imageUrl: string, params: object[] = null): Observable<Blob> {
    const config = this.BuildHeaderJson(params);

    return this.http.get(
      imageUrl, { responseType: 'blob' });
  }

  public PostFile(url: string, fileUpload: File, params: object[] = null) {
    // see https://www.techiediaries.com/angular-file-upload-progress-bar/
    const config = this.BuildHeaderJson(params);


    return this.http.post<any>('http://' + this.configServer.ServerHost + url, fileUpload, {
      reportProgress: true,
      observe: 'events'
    }).pipe(map((event) => {

      switch (event.type) {
        case HttpEventType.UploadProgress:
          return { status: 'progress', message: Math.round(100 * event.loaded / event.total) };

        case HttpEventType.Response:
          return event.body;

        default:
          return `Error the file upload Failed : ${event.type}`;
      }
    }));
  }

  public Stream(url: string, params: object[] = null){

  }

  // Will create a header for Json Application with patameters
  private BuildHeaderJson(params: object[]) {
    let config = {};

    if (params !== null && params.length > 0) {
      const httpParams = new HttpParams();
      params.forEach(param => {
        httpParams.append(param.key, param.value);
      });
      config = { headers: new HttpHeaders().set('Content-Type', 'application/json'), params: httpParams };
    } else {
      config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    }

    return config;
  }
}

