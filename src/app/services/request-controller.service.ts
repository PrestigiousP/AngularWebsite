import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';

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

}
