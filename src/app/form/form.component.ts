import {Component, OnInit} from '@angular/core';
import {Form, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  startDate = new Date();

  form = this.fb.group({
    actif: ['', Validators.required],
    prenom: ['', Validators.required],
    nom: ['', Validators.required],
    dateNaissance: ['', Validators.required],
    sexe: ['', Validators.required],
    adresse: ['', Validators.required],
    noTelephone: ['', Validators.required],
    nas: ['', Validators.required],
    travail: this.fb.group({
      lieu: [''],
      heuresParJour: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: [''],
      reference: [''],
      motifDepart: [''],
      tauxHoraire: ['', Validators.required],
      primeTransport: [''],
      intervenantResponsable: [''],
    }),
    infosAdd: this.fb.group({
      sante: [''],
      typeResidence: [''],
      niveauScolarite: [''],
      statut: ['']
    }),
    programmeEmployabilite: this.fb.group({
      ouiNon: [''],
      dateDebut: [''],
      dateFin: [''],
    }),
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
    notes: this.fb.group({
      notesEvolutives: [''],
      suivi: [''],
      objectif: ['']
    })
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.form = this.indForm.getForm();
  }

  onSubmit(): void {
    alert('Thanks!');
    // httpclient (get)
    // send to the individu service
  }
}
