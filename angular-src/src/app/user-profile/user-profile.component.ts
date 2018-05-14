import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { AddConnectionService } from '../services/addConnection.service';
import { AlertService } from '../services/alert.service';
import { AuthService } from '../services/auth.service';
import { GetConnectionsService } from '../services/getConnections.service';
import { User } from '../models/User';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  private acceptConnectionSubscription;
  private addConnectionSubscription;
  private denyConnectionSubscription;
  private getUserSubscription;
  private increaseProfileViewsSubscription;
  private subscriptions: Subscription[] = [];

  private currentUser: string;
  // connected with user
  private connected: Boolean = false;
  // user has sent connection request to logged in user
  private connectionReceived: Boolean = false;
  // logged in user has sent connection to this user
  private connectionSent: Boolean = false;
  // logged in user is not connected with this user
  private notConnected: Boolean = true;
  // if logged in user is connected with user disable the connect button, else enable button
  private disableConnectButton: Boolean = false;
  private numberOfDeals: any = 0;
  private user: User;
  private user_id: string;

  constructor(private router: Router,
              private alertService: AlertService,
              private activatedRoute: ActivatedRoute,
              private getConnectionsService: GetConnectionsService,
              private userService: UserService,
              private authService: AuthService,
              private addConnectionService: AddConnectionService) { }

  ngOnInit() {
    this.currentUser = this.authService.loggedInUser();
    this.user_id = this.activatedRoute.snapshot.params['id'];
    this.getUserInfo(this.user_id);
  }

  getUserInfo(userID) {
    this.getUserSubscription = this.userService.getUserById(userID)
      .subscribe((response) => {
        this.user = response;
        this.determineNumberOfDeals(this.user);
        this.isConnected();
      }, (error) => {
        this.alertService.error('Error retrieving user info.');
      });

    this.subscriptions.push(this.getUserSubscription);

    this.increaseProfileViewsSubscription = this.userService.increaseProfileViews(userID, this.currentUser)
      .subscribe((response) => {
        this.user.profileViews = response.profileViews;
      }, (error) => {
        this.alertService.error('Error increasing profile views.');
      });

    this.subscriptions.push(this.increaseProfileViewsSubscription);
  }

  isConnected() {
    this.user.connections.forEach((user) => {
      if (user == this.currentUser) {
        this.connected = true;
        this.notConnected = false;
        return;
      }
    });
    this.user.pendingIncomingConnectionRequests.forEach((userId) => {
      if (userId === this.currentUser) {
        this.connectionSent = true;
        this.disableConnectButton = true;
        this.notConnected = false;
      }
    });
    this.user.pendingOutgoingConnectionRequests.forEach((userId) => {
      if (userId === this.currentUser) {
        this.connectionReceived = true;
      }
    })
  }

  connect() {
    this.addConnectionSubscription = this.addConnectionService.addConnection(this.currentUser, this.user_id)
      .subscribe((response) => {
        this.notConnected = false;
        this.connectionSent = true;
        this.disableConnectButton = true;
      }, (error) => {
        this.alertService.error('Error adding connection.', true);
      });

    this.subscriptions.push(this.addConnectionSubscription);
  }

  determineNumberOfDeals(user) {
    if (user.userType == 'Wholesaler') {
      this.numberOfDeals = user.wholesalerSoldProperties.length;
    } else if (user.userType == 'Investor') {
      this.numberOfDeals = user.investorBoughtProperties.length;
    } else {
      this.numberOfDeals = user.lenderLoanedProperties.length;
    }
  }

  acceptRequest(user) {
    let userId = user._id;
    this.acceptConnectionSubscription = this.addConnectionService.acceptConnection(this.currentUser, userId)
      .subscribe((response) => {
        this.getConnectionsService.reducePendingConnections(userId);
        this.notConnected = false;
        this.connected = true;
        this.connectionReceived = false;
      }, (error) => {
        this.alertService.error('Error accepting connection request.');
      });

    this.subscriptions.push(this.acceptConnectionSubscription);
  }

  denyRequest(user) {
    let userId = user._id;
    this.denyConnectionSubscription = this.addConnectionService.denyConnection(this.currentUser, userId)
      .subscribe((response) => {
        this.connectionReceived = false;
        this.connected = false;
        this.getConnectionsService.reducePendingConnections(userId)
      }, (error) => {
        this.alertService.error('Error denying connection request.');
      });

    this.subscriptions.push(this.denyConnectionSubscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

}
