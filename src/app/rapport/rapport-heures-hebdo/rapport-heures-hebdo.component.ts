import { Component, OnInit } from '@angular/core';
import {Individu} from '../../model/individu.model';
import {TalonPaie} from '../../model/TalonPaie';
import {IndividuService} from '../../services/individu.service';
import {RequestControllerService} from '../../services/request-controller.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-rapport-heures-hebdo',
  templateUrl: './rapport-heures-hebdo.component.html',
  styleUrls: ['../rapport.component.css']
})
export class RapportHeuresHebdoComponent implements OnInit {
  listeIndividus: Individu[];
  listeTalonPaie: TalonPaie[];

  constructor(private indS: IndividuService,
              private rcs: RequestControllerService,
              private route: ActivatedRoute) {
    this.route.parent.params.subscribe(params => console.log('heyyyeyyeyeee ', params));
  }

  ngOnInit(): void {
    this.listeTalonPaie = [];
    // get une liste de nombres d'heures par semaine selon le id de l'individu
    this.listeIndividus = this.indS.listeIndividu;
    this.listeIndividus.forEach(ind => {
      // pas fini, va falloir gérer la valeur de retour
      this.rcs.getTalonPaie(ind.id)
        .subscribe( data => {
          this.listeTalonPaie.push(data.heures);
        });
    });
  }

}
