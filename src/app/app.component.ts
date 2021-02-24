import { Component } from '@angular/core';
import {Individu} from './model/individu.model';
import {AuthService} from './login/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travail-session';
  hideText = true;
  hide = true;
  loginUserData = {
    username: '',
    password: ''
  };
  constructor(private auth: AuthService,
              private router: Router) {
    this.auth.getAns().subscribe( ans => { this.hide = ans;
                                           console.log(this.hide);
    });
  }

  // Envoie une demande d'autorisation
  loginUser(): void {
    console.log(this.hide);
    this.auth.sendLogin(this.loginUserData);
  }

  onKey($event: KeyboardEvent): void {
    if ($event.key === 'Enter'){
      const element = document.getElementById('auto-trigger') as HTMLElement;
      element.click();
    }
  }
}

