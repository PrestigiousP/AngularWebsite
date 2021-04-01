import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {RequestControllerService} from '../services/request-controller.service';
import {IndividuService} from '../services/individu.service';
import {Individu} from '../model/individu.model';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent implements OnInit {
 // id, nom, prenom, heures
  // le service notify la liste des individus ?
  listeIndividus: Individu[];
  nbHeuresTravaillees: Array<number>;

  form = this.fb.group({
    rapport: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,
              private rcs: RequestControllerService,
              private indS: IndividuService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    switch (this.form.value.rapport){
      case '1': {
        // get une liste de nombres d'heures par semaine selon le id de l'individu
        this.listeIndividus = this.indS.listeIndividu;
        this.listeIndividus.forEach(ind => {
          // pas fini, va falloir gérer la valeur de retour
          console.log(this.rcs.getTalonPaie(ind.id));
        });
        break;
      }
      case '2': {
        // get une liste de nombres d'heures par mois selon le id de l'individu
        break;
      }
      case '3': {
        // get un nombres de personnes par services
        break;
      }
      case '4': {
        // get des rapports statistiques annuels
        break;
      }
      default: {
        console.log('unexpected bug');
      }
    }
  }
}
