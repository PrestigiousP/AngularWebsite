import { Injectable, OnDestroy } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpClientXsrfModule, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
  private loginUrl = 'http://localhost:3000/users';
  private loginUrl2 = 'https://my-json-server.typicode.com/typicode/demo';
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
  constructor(private http: HttpClient) { }

  sendLogin(login: {username: string; password: string; }): void {
    // this.subject.next(login);
    this.subject.next(this.testUser);
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

  /*loginUser(user): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        Authorization: 'authkey'
      })
    };
    // const header = new HttpHeaders().set('Authorization', 'auth-token');
    // return this.http.get<any>(this.loginUrl);
    // console.log('testtt ', xhr);
    const data = {
      username : 'admin',
      password : 'admin',
    };
    return this.http.post<any>(`https://my-json-server.typicode.com/typicode/demo`, data, httpOptions);
  }*/
}
