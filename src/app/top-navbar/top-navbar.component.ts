import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { User } from '../models/User';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit, OnDestroy {

  private getCurrentUserSubscription;

  private currentUser: any;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.getCurrentUserSubscription = this.authService.getCurrentUser()
      .subscribe((response) => {
        this.currentUser = response;
      }, (error) => {

      });
  }

  onLogoutClick() {
    this.authService.logout();

    this.router.navigate(['/login']);
    return false;
  }

  userProfile() {
    this.router.navigate(['/profile/', this.currentUser._id]);
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.getCurrentUserSubscription.unsubscribe();
  }

}
