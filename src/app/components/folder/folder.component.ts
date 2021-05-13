import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Globals } from 'src/app/classes/globals';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {
  @Input() item: any;
  @Output() openFolder: EventEmitter<any> = new EventEmitter();

  folder: any;
  globals:Globals;

  constructor() { this.globals = new Globals(); }

  ngOnInit() {
    this.folder = this.item;
  }

  viewFolder(){
    this.openFolder.emit(this.folder.id);
  }
}
