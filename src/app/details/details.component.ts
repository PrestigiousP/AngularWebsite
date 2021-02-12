import {Component, Input, OnInit} from '@angular/core';
import {Individu} from '../model/individu.model';
import {ActivatedRoute} from '@angular/router';
import {IndividuService} from '../individu.service';
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
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
        if (matches) {
        return [
          { title: 'Informations personnelles', cols: 1, rows: 1 },
          { title: 'Santé et sécurité', cols: 1, rows: 1 },
          { title: 'Travail et expériences', cols: 1, rows: 2 },
          { title: 'Contacts', cols: 1, rows: 1 },
          { title: 'Données qualitatives', cols: 1, rows: 2}
        ];
      }
        return [
        { title: 'Informations personnelles', cols: 1, rows: 1 },
        { title: 'Santé et sécurité', cols: 1, rows: 1 },
        { title: 'Travail et expériences', cols: 2, rows: 1 },
        { title: 'Contacts', cols: 1, rows: 1 },
        { title: 'Données qualitatives', cols: 2, rows: 2}
      ];
    })
  );
  @Input() individu: Individu;

  constructor(private breakpointObserver: BreakpointObserver, private route: ActivatedRoute, private  service: IndividuService) {
  }

  @Input() test;

  // @Output() navReqest =  new EventEmitter<number>(); navigation avec fleches

  ngOnInit(): void {
   /* this.route.paramMap.subscribe(params => {
      const idx = Number(params.get('idx'));
      this.individu = this.service.getIndividu[idx];
    });
*/
  }
}
