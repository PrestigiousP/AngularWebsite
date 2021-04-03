import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {RequestControllerService} from '../services/request-controller.service';
import {IndividuService} from '../services/individu.service';
import {Individu} from '../model/individu.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent implements OnInit {
  rapportChoisi: number;
  listeIndividus: Individu[];
  listeTalonPaie = [];
  listeAny = [];
  displayedColumns: string[] = ['id', 'prenom', 'nom'];
  hide: any;
  listeRapportAnnuel = [];

  form = this.fb.group({
    rapport: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.rapportChoisi = null;
    console.log(this.rapportChoisi);
  }

  onSubmit(): void {
    switch (this.form.value.rapport){
      case '1': {
          this.router.navigate(['rapport/rapportHeuresHebdo']);
          break;
      }
      case '2': {
        // get une liste de nombres d'heures par mois selon le id de l'individu
        this.router.navigate(['**']);

        break;
      }
      case '3': {
        // get un nombres de personnes par services
        break;
      }
      case '4': {
        this.router.navigate(['rapport/rapportAnnuel']);
        // get des rapports statistiques annuels
        break;
      }
      default: {
        console.log('unexpected bug');
      }
    }
  }
}
