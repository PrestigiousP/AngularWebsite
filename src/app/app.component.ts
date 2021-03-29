import { Component } from '@angular/core';
import {AuthService} from './login/auth.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travail-session';
  form = this.fb.group({
    username: [''],
    password: ['']
  });
  hideText = true;
  hide = true;
  loginUserData = {
    username: '',
    password: ''
  };
  constructor(private auth: AuthService,
              private fb: FormBuilder) {
    this.auth.getAns().subscribe( ans => { this.hide = ans; });
  }

  // Envoie une demande d'autorisation
  loginUser(): void {
    console.log('this is working ', this.form.getRawValue());
    console.log('this is json ', JSON.stringify(this.form.getRawValue()));
    this.auth.loginUser(JSON.stringify(this.form.getRawValue()))
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
    // this.auth.sendLogin(this.loginUserData);
  }

  onKey($event: KeyboardEvent): void {
    if ($event.key === 'Enter'){
      const element = document.getElementById('auto-trigger') as HTMLElement;
      element.click();
    }
  }
}

