import { Component, OnInit, Input } from '@angular/core';
import { Globals } from 'src/app/classes/globals';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
  @Input() item: any;
  
  file: any;
  globals:Globals;
  tooltipOptions = {};
  isOpen = false;

  constructor() { this.globals = new Globals(); }

  ngOnInit() {
    this.file = this.item;
    this.tooltipOptions = {
      'autoPlacement': true,
      'displayTouchscreen': true,
      'theme': "light"
    }
  }

  switchIsOpen(){
    this.isOpen = !this.isOpen;
  }

  openFile() {
    // let url = this.globals.API_PROXY + encodeURIComponent(item.asset.url) + encodeURIComponent(this.globals.API_AUTH);
    window.open(this.file.asset.url, '_blank');
  // window.open(url, '_blank');
  //  this.apiCallsService.getFileToDisplay(this.file.asset.url).subscribe(data => {
  //     var binaryData = [];
  //     binaryData.push(data);
  //     const fileURL = window.URL.createObjectURL(new Blob(binaryData));
  //     window.open(fileURL, '_blank');
  //  });
  }

}
