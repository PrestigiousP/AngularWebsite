import { Injectable } from '@angular/core';
import {Individu} from '../model/individu.model';

@Injectable({
  providedIn: 'root'
})
export class TalonPaieService {
  private id: number;
  private semaineDu: Date;
  private tauxHoraire: number;
  private heures: number;
  private primeTransport: number;
  private heuresAccumulees: number;

  constructor() { }

  getHeures(): number {
    return this.heures;
  }
}
