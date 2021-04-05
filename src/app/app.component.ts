import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';
import {RequestControllerService} from './services/request-controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loginForm: FormGroup;
  title = 'travail-session';
  hide = true;
  users = [];
  loading = false;
  submitted = false;
  returnUrl: string;
  // Permet de cacher le texte (on pourra changer la valeur plus tard si on veut)
  hideText: true;


  constructor(private auth: AuthService,
              private fb: FormBuilder,
              private router: Router,
              private rcs: RequestControllerService) {
    // redirect to home if already logged in
    /*if (this.auth.currentUserValue) {
      this.router.navigate(['/list']);
    }*/
  }

  ngOnInit(): void {
      this.loginForm = this.fb.group({
        username: [''],
        password: ['']
      });
      this.loadAllUsers();

  }

// tslint:disable-next-line:typedef
  private loadAllUsers() {
    this.rcs.getAll()
      .pipe(first())
      .subscribe(users => this.users = users);
  }

  // convenience getter for easy access to form fields
  // tslint:disable-next-line:typedef
  get f() { return this.loginForm.controls; }

   // TODO: Finir l'auth (get admin admin to login)
  // TODO: Finir formulaire enrolement (send info qui crée objet individu)

  onKey($event: KeyboardEvent): void {
    if ($event.key === 'Enter'){
      const element = document.getElementById('auto-trigger') as HTMLElement;
      element.click();
    }
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.auth.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/list']);
          this.hide = false;
        },
        error => {
          // this.alertService.error(error);
          alert('Nom d\'utilisateur ou mot de passe incorrect');
          this.loading = false;
        });
  }
}

