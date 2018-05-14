import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let url: String = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url) {
    if (this.authService.loggedIn()) {
      return true;
    } else {
      this.authService.redirecturl = url;
      this.router.navigate(['/login']);
      return false;
    }
  }

}