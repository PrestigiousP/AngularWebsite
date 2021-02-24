import {Injectable, OnInit} from '@angular/core';
import {Individu} from '../model/individu.model';
import {Adresse} from '../model/adresse.model';
import {Travail} from '../model/travail.model';
import {IntervenantService} from './intervenant.service';
import {MedecinService} from './medecin.service';
import {Intervenant} from '../model/intervenant.model';
import {Medecin} from '../model/medecin';

@Injectable({
  providedIn: 'root'
})
export class IndividuService{
  private listIndividu: Individu[];
  private listIntervenant: Intervenant[];
  private listMedecin: Medecin[];
  private nbInter: number;
  private nbMedecin: number;

  constructor(private interService: IntervenantService, private medecinService: MedecinService) {
    this.listMedecin = this.medecinService.listeMedecin;
    this.listIntervenant = this.interService.listeIntervenant;
    this.nbInter = this.listIntervenant.length;
    this.nbMedecin = this.listIntervenant.length;

    this.listIndividu = this.mockIndividusData();
  }

  // Créer des individus
  mockIndividusData(): Individu[]{
    return[
      {
        actif: true,
        adresse: this.mockAdresseData(),
        age: 20,
        donnesQualitatives: {notesEvolutives: '', objectif: '', suivi: ''},
        genre: 'M',
        intervenantResponsable: this.listIntervenant[Math.floor(Math.random() * this.nbInter)],
        motifDepart: 'S/O',
        nas: 847938625,
        niveauScolarite: 'secondaire',
        noTel: 8547940329,
        nom: 'Turcotte',
        personneRessource: {prenom: 'Maxime', nom: 'Turgeon', noTel: 9376189274},
        prenom: 'Julien',
        programmeEmployabilite: {dateDebut: this.mockRandomDate(), dateFin: this.mockRandomDate()},
        reference: 'Ami',
        santeAllergie: 'Banane',
        statut: 'clientèle',
        suiviItinerance: {dateDebut: this.mockRandomDate(), dateFin: this.mockRandomDate()},
        suiviPar: this.listMedecin[Math.floor(Math.random() * this.nbMedecin)],
        travail: this.mockTravailData()
      },
      {
        actif: true,
        adresse: this.mockAdresseData(),
        age: 20,
        donnesQualitatives: {notesEvolutives: '', objectif: '', suivi: ''},
        genre: 'M',
        intervenantResponsable: this.listIntervenant[Math.floor(Math.random() * this.nbInter)],
        motifDepart: 'S/O',
        nas: 9348437489,
        niveauScolarite: 'universitaire',
        noTel: 8594840329,
        nom: 'Roy-Ouellet',
        personneRessource: {prenom: 'Maxime', nom: 'Turgeon', noTel: 9376189274},
        prenom: 'Julien',
        programmeEmployabilite: {dateDebut: this.mockRandomDate(), dateFin: this.mockRandomDate()},
        reference: 'Ami',
        santeAllergie: 'Banane',
        statut: 'clientèle',
        suiviItinerance: {dateDebut: this.mockRandomDate(), dateFin: this.mockRandomDate()},
        suiviPar: this.listMedecin[Math.floor(Math.random() * this.nbMedecin)],
        travail: this.mockTravailData()
      },
      {
        actif: true,
        adresse: this.mockAdresseData(),
        age: 20,
        donnesQualitatives: {notesEvolutives: '', objectif: '', suivi: ''},
        genre: 'M',
        intervenantResponsable: this.listIntervenant[Math.floor(Math.random() * this.nbInter)],
        motifDepart: 'S/O',
        nas: 847938625,
        niveauScolarite: 'aucun',
        noTel: 8547940329,
        nom: 'Dumont',
        personneRessource: {prenom: 'Maxime', nom: 'Turgeon', noTel: 9376189274},
        prenom: 'Tommy',
        programmeEmployabilite: {dateDebut: this.mockRandomDate(), dateFin: this.mockRandomDate()},
        reference: 'Ami',
        santeAllergie: 'Banane',
        statut: 'clientèle',
        suiviItinerance: {dateDebut: this.mockRandomDate(), dateFin: this.mockRandomDate()},
        suiviPar: this.listMedecin[Math.floor(Math.random() * this.nbMedecin)],
        travail: this.mockTravailData()
      },
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

  get listeIndividu(): Individu[]{
    return this.listIndividu;
  }
}
