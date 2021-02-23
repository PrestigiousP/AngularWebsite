import { Component } from '@angular/core';
import {Individu} from './model/individu.model';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travail-session';
  hideText = true;
  hide = this.auth.getHide();
  loginUserData = {
    username: '',
    password: ''
  };
  constructor(private auth: AuthService) {
  }
  loginUser(): void {
    this.auth.login(this.loginUserData);
    this.hide = this.auth.getHide();
  }
}

