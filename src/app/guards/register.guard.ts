import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class RegisterGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    if (!this.authService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/dashboard']);
      return false;
    }
  }

}