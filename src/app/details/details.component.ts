import {Component, OnInit} from '@angular/core';
import {Individu} from '../model/individu.model';
import {ActivatedRoute} from '@angular/router';
import {IndividuService} from '../services/individu.service';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cardContent: string[];
  index: number;
  individu: Individu;
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
        if (matches) {
        return [
          { title: 'Informations personnelles', cols: 2, rows: 2 },
          { title: 'Santé et sécurité', cols: 2, rows: 2 },
          { title: 'Travail et expériences', cols: 2, rows: 2 },
          { title: 'Données qualitatives', cols: 2, rows: 2}
        ];
      }
        return [
        { title: 'Informations personnelles', cols: 1, rows: 2 },
        { title: 'Santé et sécurité', cols: 1, rows: 2 },
        { title: 'Travail et expériences', cols: 1, rows: 2 },
        { title: 'Données qualitatives', cols: 1, rows: 2}
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private route: ActivatedRoute, private  service: IndividuService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      const idx = Number(param.get('idx'));
      this.index = idx;
      this.individu = this.service.listeIndividu[idx];
    });
  }

}
