import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { Subscription } from 'rxjs/Subscription';

import { NewAd } from '../models/NewAd';
import { AuthService } from '../services/auth.service';
import { AlertService } from '../services/alert.service';
import { DealAdService } from '../services/dealAd.service';

@Component({
  selector: 'app-place-deal-ad',
  templateUrl: './place-deal-ad.component.html',
  styleUrls: ['./place-deal-ad.component.css']
})
export class PlaceDealAdComponent implements OnInit, OnDestroy {

  private newAdSubscription;
  private subscriptions: Subscription[] = [];

  private currentUser: string;
  private newAd: NewAd;
  private perUnit: boolean = false;

  constructor(private alertService: AlertService,
              private dealAdService: DealAdService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.currentUser = this.authService.loggedInUser();
    this.newAd = {
      investorId: this.currentUser,
      city: '',
      state: 'AL',
      zipCode: '',
      purchasePrice: '',
      bedrooms: '0',
      bathrooms: '0',
      squareFootage: '',
      yearBuilt: '',
      sellerFinancing: 'No',
      propertyType: 'Single Family',
      netOperatingIncome: '',
      capRate: '',
      cashOnCashReturn: '',
      internalRateOfReturn: ''
    }
  }

  placeAd() {
    let confirmed = window.confirm("Are you satisfied with your ad?");
    if (confirmed) {
      this.newAdSubscription = this.dealAdService.placeNewAd(this.newAd)
        .subscribe((response) => {
          if (response.success) {
            this.alertService.success('Successfully placed ad.', true);
            this.router.navigate(['/dashboard']);
          }
        }, (error) => {
          this.alertService.error('Error placing ad. Please try again.');
        });

      this.subscriptions.push(this.newAdSubscription);
    }
  }

  perUnitCheck() {
    if (this.newAd.propertyType == 'Single Family' || this.newAd.propertyType == 'Condo') {
      this.perUnit = false;
    } else {
      this.perUnit = true;
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

}
