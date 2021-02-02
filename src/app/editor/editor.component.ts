import {Component, Input, OnInit} from '@angular/core';
import {Individu} from '../model/individu.model';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @Input() individu: Individu;
  constructor() { }

  ngOnInit(): void {
  }

}
