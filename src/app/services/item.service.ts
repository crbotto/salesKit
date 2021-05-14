import { Injectable } from '@angular/core';
import { ApiCallsService } from './api-calls.service';
import { Folder } from '../classes/folder';
import { File } from '../classes/file';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  //items array will cache all items we get from the API
  items = [];
  constructor( private apiCallsService: ApiCallsService ) { }

  addItem(item){
    this.items.push(item);
  }

  // function: getRootFolder
  // returns a Promise with the root folder
  getRootFolder(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiCallsService.getRootFolder()
        .subscribe((data: any) => {
          //parsedItems will contain an array of File and Folder objects
          data.response.parsedItems = this.parseItems(data.response.items);
          let  item = new Folder(data.response);
          this.items.push(item);
          resolve(item);
      },
      (error) => {
        reject(error);
      });
    });
  }

  // function: getItem
  // parameter: item id
  // returns a Promise with the item that match the id parameter
  getItem(id): Promise<any> {
    return new Promise((resolve, reject) => {
      //First use case: I check if the item is cached in the items array, if so then I return the item from the array 
      let index = this.items.findIndex((item) => item.id === id);
      if(index > -1){
        resolve(this.items[index]);
      }

      //Second use case: the item it's not chaced in the items array, therefore I call the api to get the item
      this.apiCallsService.getItem(id)
        .subscribe((data: any) => {
          data.response.parsedItems = this.parseItems(data.response.items);
          let  item = new Folder(data.response);
          this.items.push(item);
          resolve(item);
      },
      (error) => { 
        reject(error);
      });
    });
  }

  // function: getItem
  // parameter: items array with JSON Objects
  // returns an array of File and Folder objects built from the items array
  parseItems(items){
    let result = [];
    items.forEach((item) => {
      if(item.type === 'folder'){
        let newFolder = new Folder(item);
        result.push(newFolder);
      } else {
        let newFile = new File(item);
        result.push(newFile);
      }
    });

    return result;

  }
}
