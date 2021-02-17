import { Component } from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  startDate = new Date();
  itinerance = false;

  form = this.fb.group({
    actif: [''],
    prenom: [''],
    nom: [''],
    dateNaissance: [''],
    sexe: [''],
    adresse: [''],
    noTelephone: [''],
    nas: [''],
    infosAdd: this.fb.group({
      sante: [''],
      lieuTravail: [''],
      dateDebutParticipation: [''],
      dateFinParticipation: [''],
      reference: [''],
      typeResidence: [''],
      niveauScolarite: [''],
      programmeEmployabilite: this.fb.group({
        ouiNon: [''],
        dateDebut: [''],
        dateFin: [''],
        motifDepart: [''],
        heuresParJour: ['']
      }),
      statut: [''],
      itinerance: this.fb.group({
        ouiNon: [''],
        dateDebut: [''],
        dateFin: ['']
      }),
      travauxCommunautaires: this.fb.group({
        ouiNon: [''],
        dateDebut: [''],
        dateFin: [''],
      }),
      tauxHoraire: [''],
      primeTransport: [''],
      intervenantResponsable: [''],
      personneRessource: this.fb.group({
        prenom: [''],
        nom: [''],
        lien: [''],
        noTelephone: [''],
      }),
      suiviPar: this.fb.group({
        statut: [''],
        prenom: [''],
        nom: [''],
        noTelephone: [''],
        organisme: [''],
        courriel: [''],
        fax: ['']
      }),
    }),
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }
  test(e: any): void {
    console.log(e);
  }
}
