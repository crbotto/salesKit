import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FolderStructureComponent } from './components/folder-structure/folder-structure.component';

const routes: Routes = [
  { path: 'folders', component: FolderStructureComponent },
  { path: '', component: FolderStructureComponent, pathMatch: 'full' },
  { path: '**', component: FolderStructureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
