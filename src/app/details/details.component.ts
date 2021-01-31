import {Component, Input, OnInit, Output} from '@angular/core';
import {Individu} from '../model/individu.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() individu: Individu;
  constructor() { }
  // @Output() navReqest =  new EventEmitter<number>();

  ngOnInit(): void {
  }

}
