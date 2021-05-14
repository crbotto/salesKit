import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../../services/api-calls.service';
import { ItemService } from '../../services/item.service';
import { Folder } from 'src/app/classes/folder';
import { Globals } from 'src/app/classes/globals';

@Component({
  selector: 'app-folder-structure',
  templateUrl: './folder-structure.component.html',
  styleUrls: ['./folder-structure.component.scss']
})
export class FolderStructureComponent implements OnInit {

  currentPath: Folder[] = new Array();
  items = [];
  globals:Globals;

  //variables to handle errors
  error = false;
  errorMsg = '';

  constructor( private itemService: ItemService ) { 
    this.globals = new Globals();
  }

  ngOnInit() {
    //Loading the root folder
    this.itemService.getRootFolder()
      .then((item: any) => {
        this.currentPath.push(item);
        this.items = item.items;
    },
    (error) => {
      this.handleError(error);
    });
  }

  openFolder(id: any) {
    // Use case: going backwards in the path. Before getting the item from the ItemService I check if this item already exists in the path
    let index = this.currentPath.findIndex((path) => path.id === id);
    if(index > -1){
      if(this.currentPath[index].items.length === 0){
        return;
      }
        
      this.items = this.currentPath[index].items; 
      this.currentPath.splice(index+1);
    } else {
    // Use case: user clicked on a folder box, then we need to get tge folder from the ItemService 012-194999798
      this.itemService.getItem(id).then(item => {
      // this.itemService.getItem("012-194999798").then(item => { //used to test errors from the api
        this.currentPath.push(item);
        this.items = item.items; 
      },
      (error) => { 
        this.handleError(error);
      });
    }
  }

  isFolder(item) {
    if(item instanceof Folder){
      return true;
    }

    return false;
  }

  handleError(err) {
    console.log('handel error', err);
    //if it's an api error the will return an object {error: {message: "text",...} ...}
    if(err.error){
      this.errorMsg = err.error.message;
    } else {
      this.errorMsg = err;
    }
    this.error = true;
  }

  closeError() {
    this.errorMsg = '';
    this.error = false;
  }
}
