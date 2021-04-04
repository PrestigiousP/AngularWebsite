import { Component, OnInit } from '@angular/core';
import {IndividuService} from '../../services/individu.service';
import {RequestControllerService} from '../../services/request-controller.service';
import {ActivatedRoute} from '@angular/router';
import {Individu} from '../../model/individu.model';
import {TalonPaie} from '../../model/TalonPaie';

@Component({
  selector: 'app-rapport-heures-mensuel',
  templateUrl: './rapport-heures-mensuel.component.html',
  styleUrls: ['../rapport.component.css']
})
export class RapportHeuresMensuelComponent implements OnInit {
  listeIndividus: Individu[];
  listeNbHeures: number[];

  constructor(private indS: IndividuService,
              private rcs: RequestControllerService) { }

  ngOnInit(): void {
    this.listeNbHeures = [];
    // get une liste de nombres d'heures par semaine selon le id de l'individu
    this.listeIndividus = this.indS.listeIndividu;
    this.listeIndividus.forEach( ind => {
      this.rcs.getTalonPaie(ind.id)
        .subscribe( data => {
          let nbHeures = 0;
          data.semaines.forEach( semaine => {
            nbHeures += semaine.heures;
          });
          this.listeNbHeures.push(nbHeures);
          // console.log(data.semaines);
        });
    });
    /*this.listeIndividus.forEach(ind => {
      // pas fini, va falloir gérer la valeur de retour
      this.rcs.getTalonPaie(ind.id)
        .subscribe( data => {
          this.listeTalonPaie.push(data.heures);
        });
    });*/
  }

}
