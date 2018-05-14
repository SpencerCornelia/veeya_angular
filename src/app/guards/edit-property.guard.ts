import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { ViewPropertyService } from '../services/viewProperty.service';

@Injectable()
export class EditPropertyGuard implements CanActivate {
  constructor(private authService: AuthService, private viewPropertyService: ViewPropertyService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    let canAccess = false;

    let propertyId = route.params.id;

    let loggedIn = this.authService.loggedIn();
    let userId = this.authService.loggedInUser();

    let currentUserType = this.authService.loggedInUserType();
    let userType = route.data.userType;

    if (currentUserType != userType || !loggedIn) {
      return false;
    } else if (loggedIn) {
      /*

        this page needs work. I may not need to use this guard
        if I use /editproperty as a child component of /view-properties

      */
      this.isWholesaler(userId, propertyId, (error, success) => {
        if (success) {
          canAccess = true;
        }
      })
    }

    return false;
  }

  isWholesaler(userId, propertyId, callback) {
    this.viewPropertyService.getPropertyById(propertyId)
      .subscribe((property) => {
        if (property.wholesaler_id === userId) {
          callback(false, true);
        } else {
          callback(true);
        }
      }, (error) => {
        callback(true);
      })
  }

}