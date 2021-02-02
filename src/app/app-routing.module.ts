import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailsComponent} from './details/details.component';
import {EditorComponent} from './editor/editor.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {FormulaireComponent} from './formulaire/formulaire.component';


const routes: Routes = [
  { path: '', component: FormulaireComponent}, // Seulement à titre de test
  { path: 'details/:idx',  component: DetailsComponent },
  { path: 'edit/:idx',  component: EditorComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
