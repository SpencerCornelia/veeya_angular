import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { AppRoutingModule } from '../app-routing.module';
import { ModuleWithProviders } from '@angular/core';

import { User } from '../models/User';
import { Property } from '../models/Property';

import { AlertService } from '../services/alert.service';
import { AuthService } from '../services/auth.service';
import { AddPropertyService } from '../services/addProperty.service';
import { PhotosService } from '../services/photos.service';
import { ValidateService } from '../services/validate.service';

declare var $: any;

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit, OnDestroy {

  private propertySubscription;
  private subscriptions: Subscription[] = [];

  private propertyComps: Array<Object>;
  private newProperty: Property;
  private photo: File;
  private photos: Array<File> = [];
  private uploadedPhotos: Array<string> = [];
  private validForm: boolean = false;
  private validPhotos: boolean = false;

  private addressValid: boolean = false;
  private cityValid: boolean = false;
  private zipCodeValid: boolean = false;
  private purchasePriceValid: boolean = false;
  private inputValid: boolean = true;
  private compAddressOneValid: boolean = true;
  private compPriceOneValid: boolean = true;
  private compAddressTwoValid: boolean = true;
  private compPriceTwoValid: boolean = true;
  private compAddressThreeValid: boolean = true;
  private compPriceThreeValid: boolean = true;

  constructor(private alertService: AlertService,
              private authService: AuthService,
              private addPropertyService: AddPropertyService,
              private photosService: PhotosService,
              private router: Router,
              private validateService: ValidateService) { }

  ngOnInit() {
    document.getElementById('removePhotos').hidden = true;
    document.getElementById('uploadPhotos').hidden = true;

    document.getElementById("property-content").hidden = true;
    document.getElementById("comps-content").hidden = true;
    document.getElementById("photos-content").hidden = true;
    document.getElementById("confirm-content").hidden = true;

    let wholesalerID = this.authService.loggedInUser();
    let propertyComps = [];
    this.newProperty = {
      _id: 0,
      wholesaler_id: wholesalerID,
      address: '',
      city: '',
      state: 'AL',
      zipCode: '',
      purchasePrice: '',
      bedrooms: 0,
      bathrooms: 0,
      expectedRehab: '',
      HOA: '',
      propertyTaxes: '',
      utilities: '',
      afterRepairValue: '',
      capRate: '',
      averageRent: '',
      squareFootage: '',
      insurance: '',
      propertyType: 'Single Family',
      yearBuilt: '',
      status: 'Listed',
      sellerFinancing: 'no',
      comps: [
        {
          firstCompAddress: '',
          firstCompPrice: ''
        },
        {
          secondCompAddress: '',
          secondCompPrice: ''
        },
        {
          thirdCompAddress: '',
          thirdCompPrice: ''
        }
      ],
      photos: []
    }

    $("#location-button").prop('disabled', true);
    $("#property-button").prop('disabled', true);
    $("#photos-button").prop('disabled', true);
  }

  onSubmit() {
    this.newProperty.purchasePrice = this.formatInput(this.newProperty.purchasePrice);
    this.newProperty.expectedRehab = this.formatInput(this.newProperty.expectedRehab);
    this.newProperty.afterRepairValue = this.formatInput(this.newProperty.afterRepairValue);
    this.newProperty.averageRent = this.formatInput(this.newProperty.averageRent);
    this.newProperty.squareFootage = this.formatInput(this.newProperty.squareFootage);
    this.newProperty.capRate = this.formatInput(this.newProperty.capRate);
    this.newProperty.HOA = this.formatInput(this.newProperty.HOA);
    this.newProperty.propertyTaxes = this.formatInput(this.newProperty.propertyTaxes);
    this.newProperty.utilities = this.formatInput(this.newProperty.utilities);
    this.newProperty.insurance = this.formatInput(this.newProperty.insurance);

    console.log("this.newProperty:", this.newProperty)

    this.photosService.getPropertyPhotoUrls(this.uploadedPhotos, (error, photos) => {
      if (error) {
        this.alertService.error('Error uploading photo.');
        return;
      } else {
        this.newProperty.photos = photos;
        this.propertySubscription = this.addPropertyService.addProperty(this.newProperty)
          .subscribe((response) => {
            if (response.success === true) {
              this.alertService.success(response.message);
              this.router.navigate(['/dashboard']);
            }
          }, (error) => {
            this.alertService.error(error.message);
          });

        this.subscriptions.push(this.propertySubscription);
      }
    });
  }

  addPhoto(event) {
    let file = event.target.files[0];
    let fileType = file["type"];
    if (this.validateService.validatePhotoInput(fileType)) {
      this.photo = event.target.files[0];
      this.photos.push(this.photo);
      document.getElementById('selectedFiles').innerHTML += file.name + "</br>";
      document.getElementById('removePhotos').hidden = false;
      document.getElementById('uploadPhotos').hidden = false;
    } else {
      this.alertService.error('Please upload an image file.');
    }

    if (this.photos.length === 3) {
      let inputButton = (<HTMLInputElement>document.getElementById('imageInput'));
      inputButton.disabled = true;
    }
  }

  uploadPhotos(event) {
    document.getElementById('uploadPhotos').setAttribute('disabled', 'disabled');
    this.photosService.uploadPropertyPhotos(this.photos, (error, photos) => {
      if (error) {
        this.alertService.error('Error uploading photos. Please try again later.');
      } else {
        let inputValue = (<HTMLInputElement>document.getElementById('imageInput'));
        inputValue.value = "";
        document.getElementById('removePhotos').hidden = true;
        document.getElementById('uploadPhotos').hidden = true;
        $("#photos-button").prop('disabled', false);
        this.uploadedPhotos = photos;
        this.photos = [];
        this.validPhotos = true;
        this.alertService.success('Successfully uploaded photo(s).');
      }
    });
  }

  removePhotos() {
    this.photos = [];
    document.getElementById('selectedFiles').innerHTML = "";
    let inputValue = (<HTMLInputElement>document.getElementById('imageInput'));
    inputValue.value = "";
    inputValue.disabled = false;
    document.getElementById('removePhotos').hidden = true;
    document.getElementById('uploadPhotos').hidden = true;
    this.alertService.success('Photo removed.');
  }

  changeTab(current, newTab) {
    document.getElementById(current + '-content').hidden = true;
    document.getElementById(current + '-tab').classList.remove('active');

    document.getElementById(newTab + '-content').hidden = false;
    document.getElementById(newTab + '-tab').classList.add('active');
  }

  cancel() {
    this.uploadedPhotos.forEach((photo) => {
      this.photosService.removePropertyPhotos(photo, (error) => {
        if (error) {
          this.alertService.error('Error removing property photos.', false);
          return;
        }
      })
    })

    this.router.navigate(['/dashboard']);
  }

  // VALIDATE LOCATION TAB CONTENT //

  validateAddress(input) {
    if (input.classList.contains('ng-invalid')) {
      this.addressValid = false;
    } else if (input.classList.contains('ng-valid')) {
      this.addressValid = true;
    }

    this.locationTabValid();
  }

  validateCity(input) {
    if (input.classList.contains('ng-invalid')) {
      this.cityValid = false;
    } else if (input.classList.contains('ng-valid')) {
      this.cityValid = true;
    }

    this.locationTabValid();
  }

  validateZipCode(input) {
    if (input.classList.contains('ng-invalid')) {
      this.zipCodeValid = false;
    } else if (input.classList.contains('ng-valid')) {
      this.zipCodeValid = true;
    }

    this.locationTabValid();
  }

  locationTabValid() {
    if (this.addressValid && this.cityValid && this.zipCodeValid) {
      $("#location-button").prop('disabled', false);
      return true;
    } else {
      $("#location-button").prop('disabled', true);
      return false;
    }
  }

  // VALIDATE PROPERTY TAB CONTENT //

  validatePurchasePrice(input) {
    if (input.classList.contains('ng-invalid')) {
      this.purchasePriceValid = false;
    } else {
      this.purchasePriceValid = true;
    }

    this.propertyTabValid();
  }

  validateInput(input) {
    if (input.classList.contains('ng-invalid')) {
      this.inputValid = false;
    } else {
      this.inputValid = true;
    }

    this.propertyTabValid();
  }

  propertyTabValid() {
    if (this.purchasePriceValid && this.inputValid) {
      $("#property-button").prop('disabled', false);
      return true;
    } else {
      $("#property-button").prop('disabled', true);
      return false;
    }
  }

  // VALIDATE COMP TAB CONTENT //

  validateFirstAddress(input) {
    if (input.classList.contains('ng-invalid')) {
      this.compAddressOneValid = false;
    } else {
      this.compAddressOneValid = true;
    }

    this.compTabValid();
  }

  validateFirstPrice(input) {
    if (input.classList.contains('ng-invalid')) {
      this.compPriceOneValid = false;
    } else {
      this.compPriceOneValid = true;
    }

    this.compTabValid();
  }

  validateSecondAddress(input) {
    if (input.classList.contains('ng-invalid')) {
      this.compAddressTwoValid = false;
    } else {
      this.compAddressTwoValid = true;
    }

    this.compTabValid();
  }

  validateSecondPrice(input) {
    if (input.classList.contains('ng-invalid')) {
      this.compPriceTwoValid = false;
    } else {
      this.compPriceTwoValid = true;
    }

    this.compTabValid();
  }

  validateThirdAddress(input) {
    if (input.classList.contains('ng-invalid')) {
      this.compAddressThreeValid = false;
    } else {
      this.compAddressThreeValid = true;
    }

    this.compTabValid();
  }

  validateThirdPrice(input) {
    if (input.classList.contains('ng-invalid')) {
      this.compPriceThreeValid = false;
    } else {
      this.compPriceThreeValid = true;
    }

    this.compTabValid();
  }

  compTabValid() {
    if (this.compAddressOneValid && this.compPriceOneValid &&
        this.compAddressTwoValid && this.compPriceTwoValid &&
        this.compAddressThreeValid && this.compPriceThreeValid) {
      $("#comp-button").prop('disabled', false);
      return true;
    } else {
      $("#comp-button").prop('disabled', true);
      return false;
    }
  }

  formatInput(input) {
    input = input.replace(/$/g,'');
    input = input.replace(/%/g,'');
    input = input.replace(/,/g,'');
    input = input.replace(/ /g, '');
    return input;
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

}
