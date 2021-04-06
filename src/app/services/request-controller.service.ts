import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {Individu} from '../model/individu.model';

@Injectable({
  providedIn: 'root'
})
export class RequestControllerService {

  constructor(private http: HttpClient) { }

  db = 'http://localhost:3000/';

  getTalonPaie(id: number): Observable<any>{
    return this.http.get(this.db + 'talonPaie/' + id);
  }
  getRapportAnnuel(id: number): Observable<any>{
    return this.http.get(this.db + 'statsAnnuelles/' + id);
  }

  // tslint:disable-next-line:typedef
  getAll() {
    return this.http.get<User[]>(this.db + 'users');
  }
  getMedecins(): Observable<any>{
    return this.http.get(this.db + 'medecins');
  }
  getIntervenants(): Observable<any>{
    return this.http.get(this.db + 'intervenants');
  }
  getIndividus(): Observable<any>{
    return this.http.get(this.db + 'individus');
  }
  createIndividu(ind: Individu): void {
    console.log('Je suis en train de post mon individu');
    this.http.post(this.db + 'individus', ind).subscribe();
  }
}
