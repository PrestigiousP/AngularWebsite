import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListeIndividuComponent} from './liste-individu/liste-individu.component';
import {FormComponent} from './form/form.component';
import {DetailsComponent} from './details/details.component';
// import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {EditorComponent} from './editor/editor.component';
import {AuthAccessGuard} from './login/auth-access.guard';
import {NavMenuComponent} from './nav-menu/nav-menu.component';
import {AppComponent} from './app.component';



const routes: Routes = [
  // {path: 'auth', component: LoggedInComponent, canActivate: [AuthAccessGuard]},
  // {path: 'home', component: LoggedInComponent},
  // {path: 'home', component: NavMenuComponent},
  {path: 'list', component: ListeIndividuComponent, canActivate: [AuthAccessGuard]},
  // {path: '', component: ListeIndividuComponent},
  {path: 'form', component: FormComponent, canActivate: [AuthAccessGuard]},
  {path: '', component: AppComponent},
  // {path: 'details/:idx', component: DetailsComponent},
  {path: 'details/:idx', component: DetailsComponent, canActivate: [AuthAccessGuard]},
  { path: 'edit/:idx',  component: EditorComponent, canActivate: [AuthAccessGuard]},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
