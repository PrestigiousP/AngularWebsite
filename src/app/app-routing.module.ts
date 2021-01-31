import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailsComponent} from './details/details.component';
import {EditorComponent} from './editor/editor.component';


const routes: Routes = [
  { path: 'details/:idx',  component: DetailsComponent },
  { path: 'editor/:idx',  component: EditorComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
