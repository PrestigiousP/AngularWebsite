import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import {Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthAccessGuard implements CanActivate {
  subscription: Subscription;
  bool: boolean;
  account = {
    username: 'admin',
    password: 'admin',
  };

  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    this.subscription = this.authService.getAuth().subscribe(
      login => { if (login.username === this.account.username && login.password === this.account.password) {
        this.authService.sendAns();
        this.bool = true;
        }
        else{
          this.bool =  false;
        }
      }
    );
    return this.bool;
  }

}
