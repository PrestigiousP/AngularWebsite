import { Injectable, OnDestroy } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import { AppComponent} from '../app.component';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
  private hide = true;
  private subject = new Subject<any>();
  private subjectReturned = new Subject<boolean>();
  // sample = Observable.(this.hide);
  testUser = {
    username: 'admin',
    password: 'admin',
  };
  user = {
    username: '',
    password: ''
  };
  constructor() { }

  sendLogin(login: {username: string; password: string; }): void {
    this.subject.next(login);
  }

  getAuth(): Observable<any> {
    return this.subject.asObservable();
  }

  sendAns(): void{
    // Envoyer une réponse seulement si le login est bon
    this.subjectReturned.next(false);
  }

  getAns(): Observable<boolean>{
    return this.subjectReturned.asObservable();
  }

  ngOnDestroy(): void {
    this.subject.unsubscribe();
  }

}
