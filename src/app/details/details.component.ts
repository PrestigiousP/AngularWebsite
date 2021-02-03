import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cardContent: string[];
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
        if (matches) {
        return [
          { title: 'Informations personnelles', cols: 1, rows: 1 },
          { title: 'Santé et sécurité', cols: 1, rows: 1 },
          { title: 'Travail et expériences', cols: 1, rows: 1 },
          { title: 'Contacts', cols: 1, rows: 1 },
          { title: 'Données qualitatives', cols: 1, rows: 1}
        ];
      }
      return [
        { title: 'Informations personnelles', cols: 2, rows: 1 },
        { title: 'Santé et sécurité', cols: 1, rows: 1 },
        { title: 'Travail et expériences', cols: 1, rows: 2 },
        { title: 'Contacts', cols: 1, rows: 1 },
        { title: 'Données qualitatives', cols: 2, rows: 1}
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
