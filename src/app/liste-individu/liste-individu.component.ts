import { Component, OnInit } from '@angular/core';
import {IndividuService} from '../individu.service';
import {Individu} from '../model/individu.model';

@Component({
  selector: 'app-liste-individu',
  templateUrl: './liste-individu.component.html',
  styleUrls: ['./liste-individu.component.css']
})
export class ListeIndividuComponent implements OnInit {
  private listIndividu: Individu[];
  constructor(private service: IndividuService) { }

  ngOnInit(): void {
  }

}
