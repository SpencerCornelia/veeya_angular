import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { AlertService } from '../services/alert.service';
import { AuthService } from '../services/auth.service';
import { DashboardService } from '../services/dashboard.service';
import { EditPropertyService } from '../services/editProperty.service';
import { GetConnectionsService } from '../services/getConnections.service';
import { ProfileService } from '../services/profile.service';

import { Property } from '../models/Property';
import { User } from '../models/User';
import * as d3 from 'd3';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  private dashboardServiceSubscription;
  private getCurrentUserSubscription;
  private getPendingConnectionsSubscription;
  private subscriptions: Subscription[] = [];

  private currentUser: User;
  private data: any;
  private pageTitle: String;
  private properties: Property[] = [];
  private userID: String;
  private userType: String;

  private view = [1000,500];
  private profileViews;
  private propertiesAddedPendingSold;
  private connectionsMade;
  private invitesSent;
  private propertiesBought;
  private propertiesSold;
  private colorScheme: string = 'cool';
  private schemeType: string = 'ordinal';

  constructor(private alertService: AlertService,
              private authService: AuthService,
              private dashboardService: DashboardService,
              private editPropertyService: EditPropertyService,
              private getConnectionsService: GetConnectionsService,
              private profileService: ProfileService,
              private router: Router) { }

  ngOnInit() {
    this.getCurrentUser();
    this.getDashboardData();
  }

  getCurrentUser() {
    this.getCurrentUserSubscription = this.authService.getLoggedInUser()
      .subscribe((response) => {
        this.currentUser = response.data;
      }, (error) => {
        this.alertService.error('Error retrieving logged in user.');
      });

    this.subscriptions.push(this.getCurrentUserSubscription);
  }

  getDashboardData() {
    this.dashboardServiceSubscription = this.dashboardService.getData()
      .subscribe((response) => {
        this.profileViews = response.profileViews;
        this.propertiesAddedPendingSold = response.propertiesAddedPendingSold;
        this.connectionsMade = response.connectionsMade;
        this.invitesSent = response.invitesSent;
        this.propertiesBought = response.propertiesBought;
        this.propertiesSold = response.propertiesSold;
      }, (error) => {

      });

    this.subscriptions.push(this.dashboardServiceSubscription);
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

}
