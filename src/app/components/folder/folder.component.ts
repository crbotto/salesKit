import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Folder } from 'src/app/classes/folder';
import { Globals } from 'src/app/classes/globals';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {
  @Input() folder: Folder;
  @Output() openFolder: EventEmitter<string> = new EventEmitter();

  globals:Globals;

  constructor() { this.globals = new Globals(); }

  ngOnInit() {
  }

  // This function handles the event when user clicks on a folder box to open it
  viewFolder(){
    this.openFolder.emit(this.folder.id);
  }
}
