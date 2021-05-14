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

  // function: getRootFolder
  // returns an Observable
  // gets the root folder
  getRootFolder(): Observable<any> {
    let url = this.globals.API_PROXY + encodeURIComponent(this.globals.API_URL) + encodeURIComponent(this.globals.API_AUTH);
    return this.httpClient.get(url);
  }

  // function: getItem
  //parameter: item id
  // returns an Observable
  // gets an item by the id
  getItem(id): Observable<any> {
    let url = this.globals.API_PROXY + encodeURIComponent(this.globals.API_URL + `/${id}`) + encodeURIComponent(this.globals.API_AUTH);
    return this.httpClient.get(url);
  }
}
