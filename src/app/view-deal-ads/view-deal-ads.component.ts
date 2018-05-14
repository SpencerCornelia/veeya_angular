import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { AlertService } from '../services/alert.service';
import { AuthService } from '../services/auth.service';
import { DealAdService } from '../services/dealAd.service';

import { NewAd } from '../models/NewAd';
import { User } from '../models/User';

@Component({
  selector: 'app-view-deal-ads',
  templateUrl: './view-deal-ads.component.html',
  styleUrls: ['./view-deal-ads.component.css']
})
export class ViewDealAdsComponent implements OnInit, OnDestroy {

  private deleteAdSubscription;
  private getDealsSubscription;
  private subscriptions: Subscription[] = [];

  private currentAds: Array<NewAd> = [];
  private currentUser: string;
  private deal: any;
  private userType: string;
  private investorUserType: boolean = false;
  private wholesalerUserType: boolean = false;
  private lenderUserType: boolean = false;

  constructor(private alertService: AlertService,
              private authService: AuthService,
              private dealAdService: DealAdService,
              private router: Router) { }

  ngOnInit() {
    document.getElementById("table-row").hidden = true;
    document.getElementById("property-content").hidden = true;
    document.getElementById("return-content").hidden = true;
    document.getElementById("confirm-content").hidden = true;
    document.getElementById("search-complete-content").hidden = true;
    this.currentUser = this.authService.loggedInUser();
    this.userType = this.authService.loggedInUserType();
    if (this.userType == 'Investor') {
      this.investorUserType = true;
    } else if (this.userType == 'Wholesaler') {
      this.wholesalerUserType = true;
    } else {
      this.lenderUserType = true;
    }

    this.getAds();

    this.dealModel();
  }

  dealModel() {
    this.deal = {
      city: '',
      state: 'AL',
      zipCode: '',
      minPurchasePrice: '',
      maxPurchasePrice: '',
      propertyType: 'Single Family',
      minBedrooms: '0',
      maxBedrooms: '5+',
      minBathrooms: '0',
      maxBathrooms: '5+',
      maxRehabCost: '',
      afterRepairValue: '',
      yearBuilt: '',
      squareFootage: '',
      sellerFinancing: 'No',
      capRate: '',
      grossIncome: ''
    }
  }

  getAds() {
    if (this.investorUserType) {
      this.getDealsSubscription = this.dealAdService.getDealAdsForInvestor(this.currentUser)
        .subscribe((response) => {
          this.currentAds = response;
        }, (error) => {
          this.alertService.error('Error retrieving deal ads for investor.');
        });

      this.subscriptions.push(this.getDealsSubscription);
    } else {
      this.getDealsSubscription = this.dealAdService.getAllAds()
        .subscribe((response) => {
          this.currentAds = response;
        }, (error) => {
          this.alertService.error('Error retrieving all ads.');
        });

      this.subscriptions.push(this.getDealsSubscription);
    }
  }

  deleteAd(adId) {
    this.deleteAdSubscription = this.dealAdService.deleteAd(adId)
      .subscribe((response) => {
        this.alertService.success(response.message, true);
        this.router.navigate(['/dashboard']);
      }, (error) => {
        this.alertService.error(error.message, true);
      });

    this.subscriptions.push(this.deleteAdSubscription);
  }

  changeTab(current, newTab) {
    document.getElementById(current + '-content').hidden = true;
    document.getElementById(current + '-tab').classList.remove('active');

    document.getElementById(newTab + '-content').hidden = false;
    document.getElementById(newTab + '-tab').classList.add('active');
  }

  search() {
    document.getElementById('return-content').hidden = true;
    document.getElementById('table-row').hidden = false;
    document.getElementById('confirm-content').hidden = true;
    document.getElementById('search-complete-content').hidden = false;

    document.getElementById('search-row').classList.add('searched');
  }

  startOver() {
    document.getElementById('search-complete-content').hidden = true;
    document.getElementById('location-content').hidden = false;
    this.dealModel();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

}
