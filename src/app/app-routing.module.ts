import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListeIndividuComponent} from './liste-individu/liste-individu.component';
import {FormComponent} from './form/form.component';
import {DetailsComponent} from './details/details.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {EditorComponent} from './editor/editor.component';
import {AuthAccessGuard} from './guards/auth-access.guard';
import {AppComponent} from './app.component';
import {RapportComponent} from './rapport/rapport.component';
import {RapportHeuresHebdoComponent} from './rapport/rapport-heures-hebdo/rapport-heures-hebdo.component';
import {RapportAnnuelComponent} from './rapport/rapport-annuel/rapport-annuel.component';



const routes: Routes = [
  {
    path: 'rapport',
    children:
    [
      {path: 'rapportAnnuel', component: RapportAnnuelComponent},
      {path: 'rapportHeuresHebdo', component: RapportHeuresHebdoComponent},
    ],
   component: RapportComponent,
   canActivate: [AuthAccessGuard]
  },
  {path: 'list', component: ListeIndividuComponent, canActivate: [AuthAccessGuard]},
  {path: 'form', component: FormComponent, canActivate: [AuthAccessGuard]},
  {path: '', component: AppComponent},
  {path: 'details/:idx', component: DetailsComponent, canActivate: [AuthAccessGuard]},
  { path: 'edit/:idx',  component: EditorComponent, canActivate: [AuthAccessGuard]},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
