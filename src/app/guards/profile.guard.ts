import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class ProfileGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    let user_id = this.authService.loggedInUser();
    let user = route.params.id;
    if (this.authService.loggedIn()) {
      if (user_id === user) {
        return true;
      } else {
        this.router.navigate['/dashboard'];
        return false;
      }
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}