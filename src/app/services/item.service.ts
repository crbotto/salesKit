import { Injectable } from '@angular/core';
import { ApiCallsService } from './api-calls.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items = [];
  constructor( private apiCallsService: ApiCallsService ) { }

  addItem(item){
    this.items.push(item);
  }

  getItem(id): Promise<any> {
    return new Promise((resolve, reject) => {
      let index = this.items.findIndex((item) => item.id === id);
      if(index > -1){
        resolve(this.items[index]);
      }

      this.apiCallsService.getItem(id)
        .subscribe((data: any) => {
          console.log('item', data.response);
          this.items.push(data.response);
          resolve(this.items[this.items.length - 1]);
      },
      (error) => {                              //error() callback
        console.error('Request failed with error')
        reject(error);
      });
    });
  }
}
