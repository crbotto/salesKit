import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../../services/api-calls.service';
import { ItemService } from '../../services/item.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/classes/item';
import { Globals } from 'src/app/classes/globals';

@Component({
  selector: 'app-folder-structure',
  templateUrl: './folder-structure.component.html',
  styleUrls: ['./folder-structure.component.scss']
})
export class FolderStructureComponent implements OnInit {

  displayItem: Item;
  currentPath = [];
  items = [];
  loading = true;
  globals:Globals;

  constructor( private apiCallsService: ApiCallsService,
               private ItemService: ItemService) { 
                this.globals = new Globals();
               }

  ngOnInit() {
    this.apiCallsService.getRootFolder()
      .subscribe((data: any) => {
        this.ItemService.addItem(data.response);
        this.currentPath.push(data.response);
        this.displayItem = data.response;
        this.items = this.displayItem.items;
        setTimeout(() => this.loading = false, 230);
        
        // console.log('Folders', this.items);
    },
    (error) => {                              //error() callback
      console.error('Request failed with error', error)
    });
  }

  openFolder(id: any) {
    let index = this.currentPath.findIndex((path) => path.id === id);
    if(index > -1){
      if(this.currentPath[index].items.lenght === 0){
        return;
      }
        
      this.displayItem = this.currentPath[index];
      this.items = this.currentPath[index].items; 
      this.currentPath.splice(index+1);
    } else {
      this.ItemService.getItem(id).then(item => {
        // console.log("ITEM", item, item.itemCount);
        if(item.itemCount === 0){
          return;
        }
        
        this.currentPath.push(item);
        this.displayItem = item;
        this.items = item.items; 
      },
      (error) => {                              //error() callback
        console.error('Request failed with error', error);
      });
    }
  }

  isFolder(item) {
    if(item.type === 'folder'){
      return true;
    }

    return false;
  }
}
