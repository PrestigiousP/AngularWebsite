import { Component } from '@angular/core';
import {Individu} from './model/individu.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travail-session';
  selIdx: number; // change le url
  individus = this.mockIndividusData();
  index: number;
  // test pour l'instant sera à completer
  mockIndividusData(): Individu[] {
    return[
      {gender: 'male', fName: 'Jean-Paul', lName: 'Mendel', NAS: 'MENDEL20202311'},
      {gender: 'male', fName: 'André', lName: 'Pellerin', NAS: 'PELER2021021'},
      {gender: 'male', fName: 'Betrand', lName: 'Ouellette', NAS: 'OUELLET20120104'}
      ];
  }


}
