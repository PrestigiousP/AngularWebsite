import {Component, OnInit, NgZone, ViewChild} from '@angular/core';
import {Individu} from '../model/individu.model';
import {ActivatedRoute} from '@angular/router';
import {IndividuService} from '../services/individu.service';
import {map, take} from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  form: FormGroup;
  /** Based on the screen size, switch from standard to one column per row */
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  cardContent: string[];
  index: number;
  individu: Individu;
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Informations personnelles', cols: 2, rows: 3 },
          { title: 'Santé et sécurité', cols: 2, rows: 3 },
          { title: 'Travail et expériences', cols: 2, rows: 3 },
          { title: 'Données qualitatives', cols: 2, rows: 3}
        ];
      }
      return [
        { title: 'Informations personnelles', cols: 1, rows: 3 },
        { title: 'Santé et sécurité', cols: 1, rows: 3 },
        { title: 'Travail et expériences', cols: 1, rows: 3 },
        { title: 'Données qualitatives', cols: 1, rows: 3}
      ];
    })
  );

  // tslint:disable-next-line:variable-name max-line-length
  constructor(private breakpointObserver: BreakpointObserver,
              private route: ActivatedRoute, private  service: IndividuService,
              private ngZone: NgZone) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      const idx = Number(param.get('idx'));
      this.index = idx;
      this.individu = this.service.listeIndividu[idx];
    });
  }

  // tslint:disable-next-line:typedef
  triggerResize() {
    // attend de recevoir du changement puis ca resize le text area
    this.ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }


  onSubmit(): void{
    console.log('hhghhhhhhh');
  }
}
