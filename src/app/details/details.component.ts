import {Component, Input, OnInit} from '@angular/core';
import {Individu} from '../model/individu.model';
import {ActivatedRoute} from '@angular/router';
import {IndividuService} from '../individu.service';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() individu: Individu;

  constructor(private route: ActivatedRoute, private  service: IndividuService) {
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
