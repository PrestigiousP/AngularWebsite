import { Injectable } from '@angular/core';
import {TalonPaie} from '../model/TalonPaie';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestControllerService {
  db = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getTalonPaie(id: number): Observable<any>{
    return this.http.get(this.db + 'TalonPaie/' + id);
  }
  getRapportAnnuel(id: number): Observable<any>{
    return this.http.get(this.db + 'RapportAnnuel/' + id);
  }
}
