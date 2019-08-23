import { Injectable } from '@angular/core';

import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';


import { ServerConfig } from './serverConfigs';
import { Parameter } from './parameterEntities';


import { ToolBox } from './toolBox';
import { stringify } from '@angular/compiler/src/util';
import { Stream } from 'stream';

@Injectable({
  providedIn: 'root'
})
export class HttpFactoryService {

  constructor(private http: HttpClient, private configServer: ServerConfig) { }


  public post(url: string, object: object, params: Parameter[] = null) {

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


  public getImage(imageUrl: string, params: Parameter[] = null): Observable<Blob> {
  // see https://stackoverflow.com/questions/47936183/angular-file-upload/47938117#47938117
  // https://stackoverflow.com/questions/45530752/getting-image-from-api-in-angular-4-5
    const config = this.BuildHeaderJson(params);

    return this.http.get(
      imageUrl, { responseType: 'blob' });
  }


  public PostFile(url: string, fileUpload: File, params: Parameter[] = null) {
    // see https://www.techiediaries.com/angular-file-upload-progress-bar/
    // https://stackoverflow.com/questions/40214772/file-upload-in-angular (to a .subscribe())
    const config = this.BuildHeaderJsonUpload(params);

    const formData = new FormData();
    formData.append('uploadFile', fileUpload, fileUpload.name);

    return this.http.post('http://' + this.configServer.ServerHost + url, formData, config
    );
  }


  public getStreamVideo(url: string, params: Parameter[] = null, extension: string) {
    // Get a video stream from the server. Can send parameter
    const config = this.BuildHeaderMedia(params, extension);

    return this.http.get<Stream>('http://' + this.configServer.ServerHost + url, config);
  }


  private BuildHeaderJsonUpload(params: Parameter[]) {
    // Will create a header for Json Application with parameters
    let config = {};

    if (params !== null && params.length > 0) {
      const httpParams = new HttpParams();
      params.forEach(param => {
        httpParams.append(param.key, param.value);
      });
      config = { headers: new HttpHeaders().set('Content-Type', 'application/json'), params: httpParams, reportProgress: true };
    } else {
      config = { headers: new HttpHeaders().set('Content-Type', 'application/json'), reportProgress: true };
    }

    return config;
  }


  private BuildHeaderJson(params: Parameter[]) {
    // Will create a header for Json Application with parameters
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


  private BuildHeaderMedia(params: Parameter[], extension: string) {
    // Will create a header for Video Application with parameters
    let config = {};
    let mediaType: string;

    // It easier to get them at lowercase
    extension = extension.toLowerCase();

    if (['mp3', 'avi', 'ogg', 'flac', 'wav'].indexOf(extension) > -1 ) {
      mediaType = 'audio/';
    } else if (['mp4', 'avi', 'mov', 'mkv', 'wmv', 'flv'].indexOf(extension) > -1 ) {
      mediaType = 'video/';
    } else {

    }

    if (params !== null && params.length > 0) {
      const httpParams = new HttpParams();
      params.forEach(param => {
        httpParams.append(param.key, param.value);
      });
      config = { headers: new HttpHeaders().set('Content-Type', mediaType + extension), params: httpParams };
    } else {
      config = { headers: new HttpHeaders().set('Content-Type', mediaType + extension) };
    }

    return config;
  }
}

