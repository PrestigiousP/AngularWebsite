import { Component } from '@angular/core';
import {Form, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  startDate = new Date();
  itinerance = false;

  form = this.fb.group({
    actif: ['', Validators.required],
    prenom: ['', Validators.required],
    nom: ['', Validators.required],
    dateNaissance: ['', Validators.required],
    sexe: ['', Validators.required],
    adresse: ['', Validators.required],
    noTelephone: ['', Validators.required, ],
    nas: ['', Validators.required],
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
    this.checkFormControls(this.form, 0);
    this.checkFormControls(this.form.value.infosAdd.programmeEmployabilite, 1);
    this.checkFormControls(this.form.value.infosAdd.itinerance, 1);
    this.checkFormControls(this.form.value.infosAdd.travauxCommunautaires, 1);
    this.checkFormControls(this.form.value.infosAdd.personneRessource, 1);
    this.checkFormControls(this.form.value.infosAdd.suiviPar, 1);
    alert('Thanks!');
  }

  checkFormControls(form: FormGroup, i: number): void {
    if (i === 0) {
      // tslint:disable-next-line:forin
      for (const field in form.controls) {
        const control = this.form.get(field);
        if (control.value === '' ||
          control.value === null ||
          control.value === undefined) {
          alert('Le champ ' + field + ' est invalide');
          return;
        }
      }
    }
  }
  test(e: any): void {
    console.log(e);
  }
}
