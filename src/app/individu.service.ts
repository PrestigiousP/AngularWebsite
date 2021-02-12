import {Injectable, OnInit} from '@angular/core';
import {Individu} from './model/individu.model';
import {Adresse} from './model/adresse.model';
import {Travail} from './model/travail.model';

@Injectable({
  providedIn: 'root'
})
export class IndividuService{
  private listIndividu: Individu[];
  constructor() {
    this.listIndividu = this.mockIndividusData();
  }

  mockIndividusData(): Individu[] {
    return[];
  }

  mockIndividuData(): Individu{
    return{
      actif: true,
      adresse: this.mockAdresseData(),
      age: 20,
      donnesQualitatives: undefined,
      genre: 'M',
      intervenantResponsable: undefined,
      motifDepart: '',
      nas: 0,
      niveauScolarite: undefined,
      noTel: 0,
      nom: '',
      personneRessource: undefined,
      prenom: '',
      programmeEmployabilite: {dateDebut: '', dateFin: ''},
      reference: '',
      santeAllergie: '',
      statut: undefined,
      suiviItinerance: undefined,
      suiviPar: undefined,
      travail: this.mockTravailData()
    };
  }

  mockAdresseData(): Adresse{
    return {
      numCivic : Math.floor(Math.random() * 3000), appartement : 7, codePostal: 'J0C 1M0', rue: '9e Rang', ville: 'Saint-Léonard d\'Aston', typeResidence: 'appartement'
    };
  }

  // Génère un travail aléatoire
  mockTravailData(): Travail{
    switch (Math.floor(Math.random() * 4)){
      case(0):
        return{
          dateDebut: this.mockRandomDate(),
          dateFin: this.mockRandomDate(),
          heuresTravailJour: Math.floor(Math.random() * 9),
          lieu: 'Trois-Rivières',
          tauxHoraire: Math.floor(Math.random() * 9) + 10,
          transport: Math.floor(Math.random() * 11),
          travauxCommunautaires: {dateDebut: this.mockRandomDate(), dateFin: this.mockRandomDate()}
        };
      case(1):
        return{
          dateDebut: this.mockRandomDate(),
          dateFin: this.mockRandomDate(),
          heuresTravailJour: Math.floor(Math.random() * 9),
          lieu: 'Shawinigan',
          tauxHoraire: Math.floor(Math.random() * 9) + 10,
          transport: Math.floor(Math.random() * 11),
          travauxCommunautaires: {dateDebut: this.mockRandomDate(), dateFin: this.mockRandomDate()}
        };
      case(2):
        return{
          dateDebut: this.mockRandomDate(),
          dateFin: this.mockRandomDate(),
          heuresTravailJour: Math.floor(Math.random() * 9),
          lieu: 'St-Tite',
          tauxHoraire: Math.floor(Math.random() * 9) + 10,
          transport: Math.floor(Math.random() * 11),
          travauxCommunautaires: {dateDebut: this.mockRandomDate(), dateFin: this.mockRandomDate()}
        };
      case(3):
        return{
          dateDebut: this.mockRandomDate(),
          dateFin: this.mockRandomDate(),
          heuresTravailJour: Math.floor(Math.random() * 9),
          lieu: 'Louiseville',
          tauxHoraire: Math.floor(Math.random() * 9) + 10,
          transport: Math.floor(Math.random() * 11),
          travauxCommunautaires: {dateDebut: this.mockRandomDate(), dateFin: this.mockRandomDate()}
        };

    }
  }

  mockRandomDate(): Date{
    return new Date(2020, Math.floor(Math.random() * 13), Math.floor(Math.random() * 29));
  }
}
