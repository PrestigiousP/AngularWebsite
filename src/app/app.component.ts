import { Component } from '@angular/core';
import {Individu} from './model/individu.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showFiller = false;
  title = 'travail-session';
 selIdx: number; // change le url
  index: number;
 // individus = this.mockIndividusData(); // associe les data mock à un tableau d'individu
  hide = true;

  // test pour l'instant sera à completer
  // mockIndividusData(): Individu[] {
  //   return[
  //     {genre: 'M', prenom: 'Jean-Paul', nom: 'Mendel', nas: 1000},
  //     {genre: 'F', prenom: 'André', nom: 'Pellerin', nas: 2000},
  //     {genre: 'F', prenom: 'Betrand', nom: 'Ouellette', nas: 3000}
  //     ];
  // }
//    "analytics": "311cd479-776e-4cb1-880a-8b8662a84f3d"
}

