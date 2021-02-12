import { Injectable } from '@angular/core';
import {Intervenant} from './model/intervenant.model';
import {Adresse} from './model/adresse.model';

@Injectable({
  providedIn: 'root'
})
export class IntervenantService {
  private listInter: Intervenant[];

  constructor() {
    this.listInter = this.mockIntervenantsData();
  }

  private mockIntervenantsData(): Intervenant[] {
    return [
      {
        prenom: 'Frédérique',
        nom: 'Poliquin',
        email: 'frederique_poliquin@hotmail.com',
        numTel: 4836587485,
        address: this.mockAdresseData(),
        organisme: 'CoeurPetit'
      },
      {
        prenom: 'Maxime',
        nom: 'Larivière',
        email: 'maxime_lariviere@hotmail.com',
        numTel: 8547327695,
        address: this.mockAdresseData(),
        organisme: 'AdulteUnJour'
      },
      {
        prenom: 'Olivier',
        nom: 'Beauchemin',
        email: 'olivier_beauchemin@hotmail.com',
        numTel: 7590489375,
        address: this.mockAdresseData(),
        organisme: 'FiabilitéPourTous'
      }
    ];
  }

  mockAdresseData(): Adresse{
    return {
      numCivic : Math.floor(Math.random() * 3000),
      appartement : null,
      codePostal: 'J0C 1M0',
      rue: '9e Rang',
      ville: 'Saint-Léonard d\'Aston',
      typeResidence: 'maison'
    };
  }

  get listeIntervenant(): Intervenant[]{
    return this.listInter;
  }
}
