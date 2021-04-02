import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {RequestControllerService} from '../services/request-controller.service';
import {IndividuService} from '../services/individu.service';
import {Individu} from '../model/individu.model';
import {pipe} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent implements OnInit {
 // id, nom, prenom, heures
  // le service notify la liste des individus ?
  listeIndividus: Individu[];
  listeTalonPaie = [];
  hide: any;

  // listes pour rapport annuel

  journeesMaladies = [];
  sessionsManquee = [];
  retards = [];
  //

  form = this.fb.group({
    rapport: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,
              private rcs: RequestControllerService,
              private indS: IndividuService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const test = [1, 2, 3];
    const test2 = [];
    switch (this.form.value.rapport){
      case '1': {
          // get une liste de nombres d'heures par semaine selon le id de l'individu
          this.listeIndividus = this.indS.listeIndividu;
          this.listeIndividus.forEach(ind => {
          // pas fini, va falloir gérer la valeur de retour
          this.rcs.getTalonPaie(ind.id)
            .subscribe( data => {
                this.listeTalonPaie.push(data.heures);
                console.log('aaaa ', data.heures);
              });
          });
          // console.log('listeTalonPaie ', this.listeTalonPaie);
          // console.log('listeTalonPaie ', JSON.stringify(this.listeTalonPaie));
          console.log('listeTalonPaie ', this.listeTalonPaie.length);
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
        this.listeIndividus = this.indS.listeIndividu;
        this.listeIndividus.forEach(ind => {
          // pas fini, va falloir gérer la valeur de retour
          this.rcs.getTalonPaie(ind.id)
            .subscribe( data => {
              this.listeTalonPaie.push(data.heures);
              console.log('aaaa ', data.heures);
            });
        });
        this.listeIndividus.forEach(ind => {
          // pas fini, va falloir gérer la valeur de retour
          this.rcs.getRapportAnnuel(ind.id)
            .subscribe( data2 => {
              this.journeesMaladies.push(data2.journeeMaladies);
              this.sessionsManquee.push(data2.sessionsManquee);
              this.retards.push(data2.retards);
              console.log('aaaa ', data2.heures);
            });
        });

        break;
      }
      default: {
        console.log('unexpected bug');
      }
    }
  }
 /* logDataList(data: any): void {
    // console.log('testingnnas ', data);
    this.listeTalonPaie.push(data.heures);
    console.log('vvvv ', this.listeTalonPaie);
  }*/

}
