import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { User } from '../models/User';
import { AlertService } from '../services/alert.service';
import { AuthService } from '../services/auth.service';
import { InviteService } from '../services/invite.service';

@Component({
  selector: 'app-invite-user',
  templateUrl: './invite-user.component.html',
  styleUrls: ['./invite-user.component.css']
})
export class InviteUserComponent implements OnInit {

  private inviteUserSubscription;
  private subscriptions: Subscription[] = [];
  private currentUserId: string;
  private user;

  constructor(private alertService: AlertService,
              private authService: AuthService,
              private inviteService: InviteService,
              private router: Router) { }

  ngOnInit() {
    this.currentUserId = this.authService.loggedInUser();
    this.user = {
      email: '',
      userType: 'Wholesaler'
    }
  }

  onSubmit() {
    this.inviteUserSubscription = this.inviteService.inviteUser(this.user.email, this.user.userType, this.currentUserId)
      .subscribe((response) => {
        this.alertService.success(response.message, true);
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.alertService.error('Error inviting investor.', true);
      });

    this.subscriptions.push(this.inviteUserSubscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

}
