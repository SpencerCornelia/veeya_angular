import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { AlertService } from '../services/alert.service';
import { AuctionService } from '../services/auction.service';
import { AuthService } from '../services/auth.service';
import { DeletePropertyService } from '../services/deleteProperty.service';
import { EditPropertyService } from '../services/editProperty.service';
import { GetAllPropertiesService } from '../services/getAllProperties.service';
import { GetUserPropertiesService } from '../services/getUserProperties.service';
import { SoldPropertyService } from '../services/soldProperty.service';
import { ViewPropertyService } from '../services/viewProperty.service';

import { Property } from '../models/Property';
import { User } from '../models/User';

declare var $: any;

@Component({
  selector: 'app-view-properties',
  templateUrl: './view-properties.component.html',
  styleUrls: ['./view-properties.component.css']
})
export class ViewPropertiesComponent implements OnInit, OnDestroy {

  private acceptSoldPropertySubscription;
  private denySoldPropertySubscription;
  private getCurrentUserSubscription;
  private getLenderPropertiesSubscription;
  private getInitialBidsSubscription;
  private getInvestorPropertiesSubscription;
  private getStarredPropertiesSubscription;
  private getWholesalerPropertiesSubscription;
  private openAuctionSubscription;
  private subscriptions: Subscription[] = [];

  private currentUser: User;
  private openAuctionProperty: Property;
  private properties: Property[] = [];
  private userType: string;

  private investorPropertiesBought: Property[] = [];
  private investorPropertiesBoughtPending: Property[] = [];
  private investorPropertiesConnected: Property[] = [];
  private investorPropertiesStarred: Property[] = [];

  private lenderPropertiesBought: Property[] = [];
  private lenderPropertiesConnected: Property[] = [];

  private wholesalerPropertiesListed: Property[] = [];
  private wholesalerPropertiesSold: Property[] = [];
  private wholesalerPropertiesSoldPending: Property[] = [];

  private date: any;
  private dateTime: any;
  private currentMonth: any;
  private currentDay: any;
  private months: any;

  constructor(private alertService: AlertService,
              private auctionService: AuctionService,
              private authService: AuthService,
              private getPropertyService: GetAllPropertiesService,
              private deletePropertyService: DeletePropertyService,
              private getUserPropertiesService: GetUserPropertiesService,
              private editPropertyService: EditPropertyService,
              private soldPropertyService: SoldPropertyService,
              private viewPropertyService: ViewPropertyService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.userType = this.authService.loggedInUserType();

    this.date = new Date();
    this.currentMonth = this.date.getMonth();

    this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.currentDay = this.date.getDate();

    this.dateTime = {
      month: this.months[this.currentMonth],
      day: this.currentDay + 1,
      hour: '5',
      minutes: '00',
      time: 'pm'
    }

    if (this.userType == 'Wholesaler') {
      this.getPropertiesForWholesaler();
    } else if (this.userType == 'Investor') {
      this.getPropertiesForInvestor();
    } else {
      this.getPropertiesForLender();
    }

    this.getCurrentUser();

  }

  getCurrentUser() {
    this.getCurrentUserSubscription = this.authService.getLoggedInUser()
      .subscribe((response) => {
        this.currentUser = response.data;
      }, (error) => {
        this.alertService.error('Error retrieving user.');
      });
  }

  getPropertiesForWholesaler() {
    let wholesalerID = this.authService.loggedInUser();
    this.getWholesalerPropertiesSubscription = this.getUserPropertiesService.getWholesalerUserProperties(wholesalerID)
      .subscribe((response) => {
        response.forEach((property) => {
          if (property.status === 'Listed') {
            this.wholesalerPropertiesListed.push(property);
          } else if (property.status === 'Sold') {
            this.wholesalerPropertiesSold.push(property);
          } else if (property.status === 'Sold-Pending') {
            this.wholesalerPropertiesSoldPending.push(property);
          }
        });
      }, (error) => {
        this.alertService.error('Error retrieving properties for wholesaler.');
      });

    this.subscriptions.push(this.getWholesalerPropertiesSubscription);
  }

  viewProperty(property) {
    let propertyId = property._id;
    this.router.navigate(['/view/', propertyId]);
  }

  getPropertiesForInvestor() {
    let investorID = this.authService.loggedInUser();
    this.getInvestorPropertiesSubscription = this.getUserPropertiesService.getInvestorUserProperties(investorID)
      .subscribe((response) => {
        response.forEach((property) => {
          if (property.status === 'Sold') {
            this.investorPropertiesBought.push(property);
          } else if (property.status === 'Listed') {
            this.investorPropertiesConnected.push(property);
          } else if (property.status === 'Sold-Pending') {
            this.investorPropertiesBoughtPending.push(property);
          }
        });
      }, (error) => {
        this.alertService.error('Error retrieving properties for investor.');
      });

    this.getStarredPropertiesSubscription = this.getUserPropertiesService.getStarredProperties(investorID)
      .subscribe((response) => {
        this.investorPropertiesStarred = response;
      }, (error) => {
        this.alertService.error('Unable to retrieve starred properties.');
      });

    this.subscriptions.push(this.getInvestorPropertiesSubscription);
    this.subscriptions.push(this.getStarredPropertiesSubscription);
  }

  getPropertiesForLender() {
    let lenderID = this.authService.loggedInUser();
    this.getLenderPropertiesSubscription = this.getUserPropertiesService.getLenderUserProperties(lenderID)
      .subscribe((response) => {
        response.forEach((property) => {
          if (property.status === 'Connection') {
            this.lenderPropertiesConnected.push(property);
          } else if (property.status === 'Loaned') {
            this.lenderPropertiesBought.push(property);
          }
        });
      }, (error) => {
        this.alertService.error('Error retrieving properties for lender.');
      });

    this.subscriptions.push(this.getLenderPropertiesSubscription);
  }

  acceptSold(property) {
    this.acceptSoldPropertySubscription = this.soldPropertyService.acceptSoldProperty(property, this.currentUser._id)
      .subscribe((response) => {
        this.investorPropertiesBoughtPending = this.investorPropertiesBoughtPending.filter((p) => {
          return p._id != property._id;
        });
        this.investorPropertiesBought.push(property);
      }, (error) => {
        this.alertService.error('Error accepting property as sold.');
      });

    this.subscriptions.push(this.acceptSoldPropertySubscription);
  }

  denySold(property) {
    let denyPropertyId = property._id;
    this.denySoldPropertySubscription = this.soldPropertyService.denySoldProperty(property, this.currentUser._id)
      .subscribe((response) => {
        this.investorPropertiesBoughtPending = this.investorPropertiesBoughtPending.filter((prop) => {
          return prop._id != denyPropertyId;
        });
        this.investorPropertiesConnected.push(property);
      }, (error) => {

      });

    this.subscriptions.push(this.denySoldPropertySubscription);
  }

  // called when auction has not been established for a property
  // and loggedInUser is wholesaler && owner of property
  openAuction(property) {
    this.openAuctionProperty = property;
    $("#deadlineModal").modal('show');
  }

  // called when auction has been established for a property
  // user can be either investor or wholesaler
  enterAuction(property) {
    let that = this;
    let propertyId = property._id.toString();
    this.auctionService.setProperty(property);
    this.getInitialBidsSubscription = this.auctionService.getInitialBids(propertyId)
      .subscribe((response) => {
        $("#deadlineModal").modal('hide');
        this.router.navigate(['/auction/', propertyId]);
      }, (error) => {

      })

    this.subscriptions.push(this.getInitialBidsSubscription);
  }

  // called when user has submitted deadline modal
  submitDeadlineModal() {
    let currentYear = this.date.getFullYear();
    let month = this.months.indexOf(this.dateTime.month);
    let propertyId = this.openAuctionProperty._id.toString();

    if (month < this.currentMonth) {
      currentYear = currentYear + 1;
    }

    if (this.dateTime.time == 'pm') {
      let hour = parseInt(this.dateTime.hour);
      this.dateTime.hour = hour + 12;
    }

    let deadline = this.dateTime.month + ' ' + this.dateTime.day + ', ' + currentYear + ' ' +
                   this.dateTime.hour + ':' + this.dateTime.minutes + ':00';
    this.openAuctionSubscription = this.auctionService.openAuction(propertyId, deadline)
      .subscribe((response) => {
        this.auctionService.setProperty(response);
        this.router.navigate(['/auction/', propertyId]);
      }, (error) => {

      })

    this.subscriptions.push(this.openAuctionSubscription);
  }

  starProperty(property) {
    let investorId = this.authService.loggedInUser();
    let propertyId = property._id;
    this.editPropertyService.starProperty(investorId, property)
      .subscribe((response) => {
        this.alertService.success('Property starred.', true);
        this.investorPropertiesStarred.push(property);
        this.investorPropertiesConnected = this.investorPropertiesConnected.filter((p) => {
          return p._id != propertyId;
        });
      }, (error) => {

      });
  }

  unStarProperty(property) {
    let investorId = this.authService.loggedInUser();
    let propertyId = property._id;
    this.editPropertyService.unStarProperty(investorId, propertyId)
      .subscribe((response) => {
        this.alertService.success('Removed starred property.', true);
        this.investorPropertiesStarred = this.investorPropertiesStarred.filter((starProperty) => {
          return starProperty._id != propertyId;
        });
        this.investorPropertiesConnected.push(property);
      }, (error) => {

      });
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

}
