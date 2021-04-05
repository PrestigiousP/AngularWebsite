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
    this.indS.listeIndividu.subscribe( data => {
      this.listeIndividus = data;
      this.listeIndividus.forEach( ind => {
        this.rcs.getTalonPaie(ind.id)
          .subscribe( data2 => {
            let nbHeures = 0;
            data2.semaines.forEach( semaine => {
              nbHeures += semaine.heures;
            });
            this.listeNbHeures.push(nbHeures);
            // console.log(data.semaines);
          });
      });
    });


  }

}
