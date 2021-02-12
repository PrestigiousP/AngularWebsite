import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailsComponent} from './details/details.component';
import {EditorComponent} from './editor/editor.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoginComponent} from './login/login.component';
import {FormComponent} from './form/form.component';
// import {AppComponent} from "./app.component";


const routes: Routes = [
  // { path: '', component: DetailsComponent}, // Seulement à titre de test
  { path: '', component: LoginComponent}, // Seulement à titre de test
  // { path: '', component: DetailsComponent}, // Seulement à titre de test
  { path: 'form', component: FormComponent}, // Seulement à titre de test
  { path: 'details',  component: DetailsComponent },
  { path: 'edit/:idx',  component: EditorComponent },
  { path: '**', component: PageNotFoundComponent }
  // { path: 'login/', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
