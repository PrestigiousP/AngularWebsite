import {Injectable, OnInit} from '@angular/core';
import {RequestControllerService} from './request-controller.service';
import {Observable} from 'rxjs';
import {Individu} from '../model/individu.model';

@Injectable({
  providedIn: 'root'
})
export class IndividuService{
  individu: Individu;

  constructor(private rcs: RequestControllerService) {

  }

  get listeIndividu(): Observable<any>{
    return this.rcs.getIndividus();
  }

  getId(i: number): number{
    return this.listeIndividu[i].id;
  }
  initIndividu(): Individu {
    return this.individu = {
      departement: '',
      id: -1,
      prenom: '',
      nom: '',
      genre: 'M',
      age: -1,
      dateNaissance: null,
      nas: 999999999,
      actif: true,
      adresse:
        {
          numCivic: -1,
          appartement: -1,
          rue: '',
          codePostal: '',
          ville: '',
          typeResidence: 'appartement'
        },
      noTel: 0,
      santeAllergie: '',
      travail: {
        lieu: 'Trois-Rivières',
        dateDebut: new Date(),
        dateFin: new Date(),
        heuresTravailJour: 5,
        tauxHoraire: 12,
        travauxCommunautaires: {dateDebut: new Date(), dateFin: new Date()},
        transport: 0
      },
      reference: '',
      niveauScolarite: 'aucun',
      programmeEmployabilite: {dateDebut: new Date(), dateFin: new Date()},
      motifDepart: null,
      statut: 'autre',
      suiviItinerance: {dateDebut: new Date(), dateFin: new Date()},
      intervenantResponsable: {
        id: '',
        prenom: '',
        nom: '',
        email: '',
        noTel: 0,
        address:
          {
            numCivic: 0,
            appartement: null,
            codePostal: '',
            rue: '',
            ville: '',
            typeResidence: 'maison'
          },
        organisme: ''
      },
      personneRessource: {
        prenom: '',
        nom: '',
        noTel: 0
      },
      suiviPar:
        {
        courriel: '',
        fax: 0,
        genre: 'M',
        noTel: 0,
        nom: '',
        prenom: ''
        },
      donneesQualitatives: {
        notesEvolutives: '',
        suivi: '',
        objectif: ''
      }
    };
  }

}
