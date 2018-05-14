import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import fontawesome from '@fortawesome/fontawesome';

import { GetConnectionsService } from '../services/getConnections.service';
import { User } from '../models/User';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy, AfterViewInit {

  private getPendingConnectionsSubscription;
  private getNumberOfPendingConnectionsSubscription;
  private numberOfPendingConnectionsSubscription;
  private subscriptions: Subscription[] = [];

  private numberOfPendingConnections;

  constructor(private authService: AuthService,
              private router: Router,
              private getConnectionsService: GetConnectionsService) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.getPendingConnections();
  }

  getPendingConnections() {
    this.getPendingConnectionsSubscription = this.getConnectionsService.getPendingConnections()
      .subscribe((response) => {
        this.getNumberOfPendingConnections();
      }, (error) => {

      })

    this.subscriptions.push(this.getPendingConnectionsSubscription);
  }

  getNumberOfPendingConnections() {
    this.getNumberOfPendingConnectionsSubscription = this.getConnectionsService.getNumberOfPendingConnections()
      .subscribe((response) => {
        this.numberOfPendingConnections = response;

        // handle the right value of badge
        // in order to center the notification number
        // based on the number of pending connections
        if (this.numberOfPendingConnections == 0) {
          document.getElementById("badge-number").style.right = '-40px';
        } else if (this.numberOfPendingConnections < 10) {
          document.getElementById("badge-number").style.right = '-37px';
        } else if (this.numberOfPendingConnections >= 10 && this.numberOfPendingConnections < 100) {
          document.getElementById("badge-number").style.right = '-42px';
        } else if (this.numberOfPendingConnections >= 100 && this.numberOfPendingConnections < 1000) {
          document.getElementById("badge-number").style.right = '-46px';
        } else {
          document.getElementById("badge-number").style.right = '-50px';
        }

        document.getElementById("badge-number").innerHTML = this.numberOfPendingConnections;
      }, (error) => {

      })

      this.subscriptions.push(this.getNumberOfPendingConnectionsSubscription);
  }

  isInvestor() {
    let userType = this.authService.loggedInUserType();
    if (userType === 'Investor') {
      return true;
    } else {
      return false;
    }
  }

  isWholesaler() {
    let userType = this.authService.loggedInUserType();
    if (userType === 'Wholesaler') {
      return true;
    } else {
      return false;
    }
  }

  onLogoutClick() {
    this.authService.logout();

    this.router.navigate(['/login']);
    return false;
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

}
