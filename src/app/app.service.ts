import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get(url: string, params?: any) {
    let httpParams: HttpParams;
    if (params) {
        httpParams = Object.getOwnPropertyNames(params)
        .reduce((p, key) => p.set(key, params[key]), new HttpParams());
    }

    return this.httpClient.get(url, { params: httpParams });
}
}
