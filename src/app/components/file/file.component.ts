import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { File } from 'src/app/classes/file';
import { Globals } from 'src/app/classes/globals';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
  @Input() file: File;
  @Output() handleError: EventEmitter<string> = new EventEmitter();

  globals:Globals;
  tooltipOptions = {};
  isOpen = false;

  constructor() { this.globals = new Globals(); }

  ngOnInit() {
    //tooltips options is going to be used if the tooltips are enabled - check file.component.html
    this.tooltipOptions = {
      'displayTouchscreen': true,
      'theme': "light"
    }
  }

  switchIsOpen(){
    this.isOpen = !this.isOpen;
  }

  openFile() {
    // let url = this.globals.API_PROXY + encodeURIComponent(item.asset.url) + encodeURIComponent(this.globals.API_AUTH);
    let openW = null;
    try {
      window.onerror = this.handlePopupErrors;
      openW = window.open(this.file.fileUrl, '_blank');
    } catch(error){
      this.handlePopupErrors();
    } finally {
      //checking if fails to open mp4 file. 
      // Fails with message Plugin Failed: requiremutualssl.RequireMutualSSLPlugin - 
      //ERROR: Access Denied: Mutual Authentication Required
      if(openW && !openW.Window.Window && this.file.fileType === 'mp4'){
        this.handlePopupErrors();
      }
    }
  
  }

  handlePopupErrors(){
    this.handleError.emit(this.globals.openFileError +  this.file.title);
  } 
}
