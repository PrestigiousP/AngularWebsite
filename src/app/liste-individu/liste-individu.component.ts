import { Component, OnInit } from '@angular/core';
import {IndividuService} from '../services/individu.service';
import {Individu} from '../model/individu.model';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-liste-individu',
  templateUrl: './liste-individu.component.html',
  styleUrls: ['./liste-individu.component.css']
})
export class ListeIndividuComponent implements OnInit {

  listIndividu: Individu[];
  individu: Individu;
  columnsToDisplay = ['no', 'sexe', 'prenom', 'nom', 'lieuTravail', 'intervenant', 'liens'];
  constructor(private service: IndividuService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.listIndividu = this.service.initIndividu();

    this.service.listeIndividu.subscribe(
      data =>  {this.listIndividu = data;
      }
    );

    /*this.individu = this.service.initIndividu();

    this.route.paramMap.subscribe(param => {
      const idx = Number(param.get('idx'));
      this.index = idx;
      this.service.listeIndividu.subscribe(
        data => {
          this.listIndiv = data;
          this.individu = this.listIndiv[this.index];
        }
      );
    });*/
  }

}
