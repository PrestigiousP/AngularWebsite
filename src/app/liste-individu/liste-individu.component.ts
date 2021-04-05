import { Component, OnInit } from '@angular/core';
import {IndividuService} from '../services/individu.service';
import {Individu} from '../model/individu.model';

@Component({
  selector: 'app-liste-individu',
  templateUrl: './liste-individu.component.html',
  styleUrls: ['./liste-individu.component.css']
})
export class ListeIndividuComponent implements OnInit {

  listIndividu: Individu[];
  columnsToDisplay = ['no', 'sexe', 'prenom', 'nom', 'lieuTravail', 'intervenant', 'liens'];
  constructor(private service: IndividuService) { }

  ngOnInit(): void {
    this.service.listeIndividu.subscribe(
      data =>  {this.listIndividu = data;
      }
    );
  }

}
