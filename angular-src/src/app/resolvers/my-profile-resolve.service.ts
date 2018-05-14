import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { User} from '../models/User';
import { AuthService } from '../services/auth.service';

@Injectable()
export class MyProfileResolve implements Resolve<User> {

  constructor(private authService: AuthService,
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot) {

    return this.authService.getLoggedInUser()
      .mergeMap(data => {
        return this.authService.getLoggedInUser();
      });
  }
}