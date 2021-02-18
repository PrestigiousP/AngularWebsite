import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListeIndividuComponent} from './liste-individu/liste-individu.component';
import {FormComponent} from './form/form.component';
import {DetailsComponent} from './details/details.component';
import {LoginComponent} from './login/login.component';



const routes: Routes = [
  {path: '', component: ListeIndividuComponent},
  {path: 'form', component: FormComponent},
//   {path: 'details', component: DetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'details/:idx', component: DetailsComponent},
{ path: 'edit/:idx',  component: EditorComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
