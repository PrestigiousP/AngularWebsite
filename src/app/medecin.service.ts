import { Injectable } from '@angular/core';
import {Medecin} from './model/medecin';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {
  private listMedecin: Medecin[];
  constructor() {
    this.listMedecin = this.mockMedecinsData();
  }

  mockMedecinsData(): Medecin[]{
    return [
      {courriel: 'frederick_simard@gmail.com', fax: 8192735743, genre: 'M', noTel: 8192753423, nom: 'Simard', prenom: 'Frederick'},
      {courriel: 'julien_turcotte@gmail.com', fax: 7468285743, genre: 'M', noTel: 7595348589, nom: 'Turcotte', prenom: 'Julien'},
      {courriel: 'olivier_chenard@gmail.com', fax: 8743598490, genre: 'M', noTel: 6589376453, nom: 'Chenard', prenom: 'Olivier'},
    ];
  }

  get listeMedecin(): Medecin[]{
    return this.listMedecin;
  }
}
