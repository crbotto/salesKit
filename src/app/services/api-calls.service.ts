import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { Globals } from '../classes/globals';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {
  globals: Globals;

  constructor(private httpClient: HttpClient) { 
    this.globals = new Globals();
  }

  getRootFolder(): Observable<any> {
    //'https://jsonp.afeld.me/?url=https%3A%2F%2Flaunchpadapi.mediafly.com%2F3%2Fitems%3FproductId%3D201458d47426431b827dd10b7448a0ab%26accessToken%3D468c740cedfb464caf6064ee28dcaebe%26accessType%3Dview'
    let url = this.globals.API_PROXY + encodeURIComponent(this.globals.API_URL) + encodeURIComponent(this.globals.API_AUTH);
    return this.httpClient.get(url);
  }

  getItem(id): Observable<any> {
    let url = this.globals.API_PROXY + encodeURIComponent(this.globals.API_URL + `/${id}`) + encodeURIComponent(this.globals.API_AUTH);
    return this.httpClient.get(url);
  }

  getFileToDisplay(url){
    const options = { responseType: 'blob' as 'json'  };
    
    return this.httpClient.get(url, options).pipe(map(res => res));
  }
}
