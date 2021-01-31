import {Component, Input, OnInit} from '@angular/core';
import {Individu} from '../model/individu.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() individu: Individu;
  constructor() { }
  @Input() test: any;
  // @Output() navReqest =  new EventEmitter<number>(); navigation avec fleches

  ngOnInit(): void {
  }

}
