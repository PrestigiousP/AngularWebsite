import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import { AppComponent} from './app.component';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private hide = true;
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
  login(loginUserData: { username: string; password: string }): void{
    this.user = loginUserData;
    console.log(this.user);
  }
  loginVerification(): boolean{
    return this.testUser.username === this.user.username && this.testUser.password === this.user.password;
  }
  hideLogin(): void {
    this.hide = false;
  }
  getHide(): boolean{
    return this.hide;
  }

}
