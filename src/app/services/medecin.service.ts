import { Injectable } from '@angular/core';
import {Medecin} from '../model/medecin';
import {RequestControllerService} from './request-controller.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {
  constructor(private rcs: RequestControllerService) {
  }

  get listMedecin(): Observable<any>{
    return this.rcs.getMedecins();
  }
}
