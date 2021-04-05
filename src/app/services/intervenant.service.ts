import { Injectable } from '@angular/core';
import {Intervenant} from '../model/intervenant.model';
import {Adresse} from '../model/adresse.model';
import {RequestControllerService} from './request-controller.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntervenantService {
  constructor(private rcs: RequestControllerService) {
  }

  get listeIntervenant(): Observable<any>{
    return this.rcs.getIntervenants();
  }
}
