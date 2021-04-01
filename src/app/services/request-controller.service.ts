import { Injectable } from '@angular/core';
import {TalonPaie} from '../model/TalonPaie';
import {HttpClient} from '@angular/common/http';
import {Subscription} from 'rxjs';
import {filter} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RequestControllerService {
  db = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }



  getTalonPaie(id: number): Subscription{
    return this.http.get(this.db + 'TalonPaie')
      .subscribe(talon => {
          console.log('ça marche ici: ', JSON.stringify(talon));
        });
  }
}
