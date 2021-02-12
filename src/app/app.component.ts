import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'travail-session';
 selIdx: number; // change le url
  index: number;
  individus = this.mockIndividusData(); // associe les data mock à un tableau d'individu




  ///////
  hide = true;
  // test pour l'instant sera à completer
  mockIndividusData(): Individu[] {
    return[
      {gender: 'male', fName: 'Jean-Paul', lName: 'Mendel', NAS: 'MENDEL20202311'},
      {gender: 'male', fName: 'André', lName: 'Pellerin', NAS: 'PELER2021021'},
      {gender: 'male', fName: 'Betrand', lName: 'Ouellette', NAS: 'OUELLET20120104'}
      ];
  }

  ///////

  showFiller = false;
//    "analytics": "311cd479-776e-4cb1-880a-8b8662a84f3d"
}

