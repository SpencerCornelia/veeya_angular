import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { User } from '../models/User';

import { AlertService } from '../services/alert.service';
import { AuthService } from '../services/auth.service';
import { AddConnectionService } from '../services/addConnection.service';
import { GetConnectionsService } from '../services/getConnections.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.css']
})
export class ConnectionsComponent implements OnInit, OnDestroy {

  private acceptConnectionSubscription;
  private denyConnectionSubscription;
  private getConnectionsSubscription;
  private getPendingConnectionsSubscription;
  private subscriptions: Subscription[] = [];

  private connections: Array<User> = [];
  private pendingConnections: Boolean = false;
  private pendingConnectionsArray: Array<User> = [];
  private searchText: String;
  private user_id: String;

  constructor(private addConnectionService: AddConnectionService,
              private alertService: AlertService,
              private authService: AuthService,
              private getConnectionsService: GetConnectionsService,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.user_id = this.authService.loggedInUser();
    this.getConnectionsForUser();
    this.getPendingConnections();
  }

  getConnectionsForUser() {
    this.getConnectionsSubscription = this.getConnectionsService.getConnectionsForUser(this.user_id)
      .subscribe((response) => {
        this.connections = response;
      }, (error) => {

      });

    this.subscriptions.push(this.getConnectionsSubscription);
  }

  getPendingConnections() {
    this.getPendingConnectionsSubscription = this.getConnectionsService.getAllPendingConnections()
      .subscribe((response) => {
        this.pendingConnectionsArray = response as User[];
        if (this.pendingConnectionsArray.length > 0) {
          this.pendingConnections = true;
        }
      }, (error) => {
        this.alertService.error('Error with retrieving pending connections.');
      });

    this.subscriptions.push(this.getPendingConnectionsSubscription);
  }

  acceptRequest(connection) {
    let connectionId = connection._id;
    this.acceptConnectionSubscription = this.addConnectionService.acceptConnection(this.user_id, connectionId)
      .subscribe((response) => {
        let currentNumberOfPendingConnections = this.pendingConnectionsArray.length;
        this.connections.push(response.connectionUser);
        if (this.pendingConnectionsArray.length == 1) {
          this.pendingConnections = false;
          this.pendingConnectionsArray = [];
        } else {
          this.pendingConnectionsArray = this.pendingConnectionsArray.filter((connection) => {
            return connection._id != response.connectionUser._id;
          });
        }

        this.getConnectionsService.reducePendingConnections(currentNumberOfPendingConnections - 1);
      }, (error) => {
        this.alertService.error('Error accepting connection request.');
      });

    this.subscriptions.push(this.acceptConnectionSubscription);
  }

  denyRequest(connection) {
    let connectionId = connection._id;
    this.denyConnectionSubscription = this.addConnectionService.denyConnection(this.user_id, connectionId)
      .subscribe((response) => {
        let currentNumberOfPendingConnections = this.pendingConnectionsArray.length;
        if (this.pendingConnectionsArray.length == 1) {
          this.pendingConnections = false;
          this.pendingConnectionsArray = [];
        } else {
          this.pendingConnectionsArray = this.pendingConnectionsArray.filter((connection) => {
            return connection._id != response.connectionUser._id;
          });
        }

        this.getConnectionsService.reducePendingConnections(currentNumberOfPendingConnections - 1);
      }, (error) => {
        this.alertService.error('Error denying connection request.');
      });

    this.subscriptions.push(this.denyConnectionSubscription);
  }

  visitProfile(connection) {
    this.router.navigate(['/user/', connection._id]);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

}
