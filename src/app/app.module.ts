import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TooltipModule } from 'ng2-tooltip-directive';
import { AppComponent } from './app.component';
import { FolderStructureComponent } from './components/folder-structure/folder-structure.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ImgFallbackDirective } from './directives/img-fallback.directive';
import { FileComponent } from './components/file/file.component';
import { FolderComponent } from './components/folder/folder.component';

@NgModule({
  declarations: [
    AppComponent,
    FolderStructureComponent,
    ImgFallbackDirective,
    FileComponent,
    FolderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    TooltipModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
