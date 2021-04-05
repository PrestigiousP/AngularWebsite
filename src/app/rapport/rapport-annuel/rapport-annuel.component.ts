import { Component, OnInit } from '@angular/core';
import {IndividuService} from '../../services/individu.service';
import {RequestControllerService} from '../../services/request-controller.service';
import {Individu} from '../../model/individu.model';
import {RapportAnnuel} from '../../model/RapportAnnuel';

@Component({
  selector: 'app-rapport-annuel',
  templateUrl: './rapport-annuel.component.html',
  styleUrls: ['../rapport.component.css']
})
export class RapportAnnuelComponent implements OnInit {
  listeIndividus: Individu[];
  listeRapportAnnuel: RapportAnnuel[];

  constructor(private indS: IndividuService,
              private rcs: RequestControllerService) { }

  ngOnInit(): void {
    this.listeRapportAnnuel = [];
    this.indS.listeIndividu.subscribe( data => {
      this.listeIndividus = data;
      this.listeIndividus.forEach(ind => {
        // pas fini, va falloir gérer la valeur de retour
        this.rcs.getRapportAnnuel(ind.id)
          .subscribe( stat => {
            this.listeRapportAnnuel.push(stat);
          });
      });
    });
  }

}
