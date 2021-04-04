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
    this.listeIndividus = this.indS.listeIndividu;
    this.listeIndividus.forEach(ind => {
      // pas fini, va falloir gérer la valeur de retour
      this.rcs.getRapportAnnuel(ind.id)
        .subscribe( data => {
          this.listeRapportAnnuel.push(data);
        });
    });
  }

}
