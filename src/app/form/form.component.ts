import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Intervenant} from '../model/intervenant.model';
import {IntervenantService} from '../services/intervenant.service';
import {Individu} from '../model/individu.model';
import {IndividuService} from '../services/individu.service';
import {RequestControllerService} from '../services/request-controller.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  startDate = new Date();
  // individu: Individu;
  listIntervenant: Intervenant[];

  form = this.fb.group({
    actif: ['', Validators.required],
    prenom: ['', Validators.required],
    nom: ['', Validators.required],
    genre: ['', Validators.required],
    dateNaissance: ['', Validators.required],
    departement: ['', Validators.required],
    nas: [''],
    noTel: ['', Validators.required],
    santeAllergie: [''],
    reference: [''],
    niveauScolarite: [''],
    statut: [''],
    intervenantResponsable: ['', Validators.required],
    programmeEmployabilite: this.fb.group({
      ouiNon: [''],
      dateDebut: ['AAAAAAAASDF'],
      dateFin: ['']
    }),
    adresse: this.fb.group({
      numCivic: ['', Validators.required],
      rue: ['', Validators.required],
      appartement: ['', Validators.required],
      codePostal: ['', Validators.required],
      ville: ['', Validators.required],
      typeResidence: [''],
    }),
    travail: this.fb.group({
      lieu: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: [''],
      heuresTravailJour: [''],
      tauxHoraire: [''],
      transport: [''],
      travauxCommunautaires: this.fb.group({
        ouiNon: [''],
        dateDebut: [''],
        dateFin: [''],
      })
    }),
    suiviItinerance: this.fb.group({
      ouiNon: [''],
      dateDebut: [''],
      dateFin: [''],
    }),
    personneRessource: this.fb.group({
      prenom: [''],
      nom: [''],
      noTel: [''],
    }),
    suiviPar: this.fb.group({
      statut: [''],
      courriel: [''],
      fax: [''],
      noTel: [''],
      nom: [''],
      prenom: [''],
      organisme: [''],
    }),
    donneesQualitatives: this.fb.group({
      notesEvolutives: [''],
      suivi: [''],
      objectif: [''],
    })
  });

  constructor(private fb: FormBuilder,
              private intService: IntervenantService,
              private indS: IndividuService,
              private rcs: RequestControllerService) {}

  ngOnInit(): void {
    this.intService.listeIntervenant.subscribe(
      data => this.listIntervenant = data
    );
  }

  // tslint:disable-next-line:typedef
  get f() { return this.form.controls; }

  onSubmit(): void {
    console.log('prenom ', this.f.prenom.value);
    console.log('adresse ', this.f.adresse.value);
    console.log('test ', this.f.travail.value);
    // console.log('', this.f.adresse.numCivique.value);
    const individu = this.createIndividu();
    console.log(individu);
    this.rcs.createIndividu(individu);
  }
  private createIndividu(): Individu {
    const date = new Date();
    const dateNaiss = new Date(this.f.dateNaissance.value);
    let month = 0;
    if (dateNaiss.getMonth() < date.getMonth()
        && dateNaiss.getDate() < date.getDate()){
      month = -1;
    }
    const age = date.getFullYear() - dateNaiss.getFullYear() + month;

    return {
      id: null,
      prenom: this.f.prenom.value,
      nom: this.f.nom.value,
      genre: this.f.genre.value,
      dateNaissance: this.f.dateNaissance.value,
      age,
      departement: this.f.departement.value,
      nas: this.f.nas.value,
      actif: this.f.actif.value,
      motifDepart: '',
      adresse:
      {
        numCivic: this.f.adresse.value.numCivic,
        appartement: this.f.adresse.value.appartement,
        rue: this.f.adresse.value.rue,
        codePostal: this.f.adresse.value.codePostal,
        ville: this.f.adresse.value.ville,
        typeResidence: this.f.adresse.value.typeResidence
      },
      noTel: this.f.noTel.value,
      santeAllergie: this.f.santeAllergie.value,
      travail:
      {
        lieu: this.f.travail.value.lieu,
        dateDebut: this.f.travail.value.dateDebut,
        dateFin: this.f.travail.value.dateFin,
        heuresTravailJour: this.f.travail.value.ville,
        tauxHoraire: this.f.travail.value.tauxHoraire,
        travauxCommunautaires:
        {
          dateDebut: this.f.travail.value.travauxCommunautaires.dateDebut,
          dateFin: this.f.travail.value.travauxCommunautaires.dateFin,
        },
        transport: this.f.travail.value.transport
      },
      reference: this.f.reference.value,
      niveauScolarite: this.f.niveauScolarite.value,
      programmeEmployabilite:
      {
        dateDebut: this.f.programmeEmployabilite.value.dateDebut,
        dateFin: this.f.programmeEmployabilite.value.dateFin
      },
      statut: this.f.statut.value,
      suiviItinerance:
      {
        dateDebut: this.f.suiviItinerance.value.dateDebut,
        dateFin: this.f.suiviItinerance.value.dateFin
      },
      intervenantResponsable: this.findIntervenant(this.f.intervenantResponsable.value),
      personneRessource:
      {
        prenom: this.f.personneRessource.value.prenom,
        nom: this.f.personneRessource.value.nom,
        noTel: this.f.personneRessource.value.noTel
      },
      suiviPar:
      {
        courriel: this.f.suiviPar.value.courriel,
        fax: this.f.suiviPar.value.fax,
        genre: this.f.suiviPar.value.genre,
        noTel: this.f.suiviPar.value.noTel,
        nom: this.f.suiviPar.value.nom,
        prenom: this.f.suiviPar.value.prenom
      },
      donneesQualitatives:
      {
        notesEvolutives: this.f.donneesQualitatives.value.notesEvolutives,
        suivi: this.f.donneesQualitatives.value.suivi,
        objectif: this.f.donneesQualitatives.value.objectif
      }
    };
  }
  private findIntervenant(id: string): Intervenant{
    for (const int of this.listIntervenant){
      if (int.id === id){
        return int;
      }
    }
  }
}
