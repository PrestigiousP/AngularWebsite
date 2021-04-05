import { Injectable } from '@angular/core';
import {BehaviorSubject, config, Observable, Subject} from 'rxjs';
import {RequestControllerService} from './request-controller.service';
import {User} from '../model/user';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private rcs: RequestControllerService,
              private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  db = 'http://localhost:3000/';
  private test = false;
  private userId = 0;

  // tslint:disable-next-line:typedef
  login(username, password) {
    return this.http.post<any>(this.db + 'users/1', { username, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  // tslint:disable-next-line:typedef
  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
}
