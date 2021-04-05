import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import {Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthAccessGuard implements CanActivate {
  subscription: Subscription;

  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this.authService.currentUserValue;
    // this.authService.getCurrentUserValue()
    console.log('the guard got triggered ', currentUser);
    if (currentUser) {
      console.log('the guard is true');
      // authorised so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['']);
    return false;
  }
}
