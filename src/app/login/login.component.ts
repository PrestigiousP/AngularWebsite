import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hideText = true;
  loginUserData = {
    username: '',
    password: ''
  };
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  loginUser(): void {
    this.auth.login(this.loginUserData);
    // this.hide = true;
    // console.log(this.loginUserData);
  }
}
