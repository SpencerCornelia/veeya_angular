import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Property } from '../models/Property';
import { User } from '../models/User';

import { AlertService } from '../services/alert.service';
import { AuthService } from '../services/auth.service';
import { AuctionService } from '../services/auction.service';
import { CustomizePropertyService } from '../services/customizeProperty.service';
import { DeletePropertyService } from '../services/deleteProperty.service';
import { EditPropertyService } from '../services/editProperty.service';
import { PhotosService } from '../services/photos.service';
import { ValidateService } from '../services/validate.service';
import { ViewPropertyService } from '../services/viewProperty.service';

declare var $: any;

@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.css']
})
export class ViewPropertyComponent implements OnInit, OnDestroy {

  private editPropertySubscription;
  private editPropertyListedSubscription;
  private deletePropertySubscription;
  private getInitialBidsSubscription;
  private getPropertySubscription;
  private openAuctionSubscription;
  private subscriptions: Subscription[] = [];

  private auctionEstablished: string;
  private currentUserType: string;
  private dateTime: any;
  private daysAdded: boolean = false;
  private deadline: any;
  private hoursAdded: boolean = false;
  private editMode: Boolean = false;
  private enlargedPhoto: string;
  private photo: File;
  private photosToAdd: Array<File> = [];
  private propertyID: string;
  private propertyOwner: Boolean;
  private property: Property;
  private photoURLsAdded: Array<string> = [];
  private showUploadPhotosButton: Boolean = false;
  private showRemovePhotosButton: Boolean = false;
  private wholesalerID: any;

  private date: any;
  private currentMonth: any;
  private currentDay: any;
  private months: any;

  constructor(private route: ActivatedRoute,
              private alertService: AlertService,
              private authService: AuthService,
              private auctionService: AuctionService,
              private customizePropertyService: CustomizePropertyService,
              private deletePropertyService: DeletePropertyService,
              private editPropertyService: EditPropertyService,
              private viewPropertyService: ViewPropertyService,
              private router: Router,
              private photosService: PhotosService,
              private validateService: ValidateService) { }

  ngOnInit() {
    this.currentUserType = this.authService.loggedInUserType();
    this.propertyID = this.route.snapshot.params['id'];
    this.getProperty(this.propertyID);

    this.wholesalerID = this.authService.loggedInUser();

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

  }

  getProperty(id) {
    this.getPropertySubscription = this.viewPropertyService.getPropertyById(id)
      .subscribe((response) => {
        this.property = response;
        this.propertyOwner = this.confirmPropertyOwnership();
        this.auctionEstablished = this.property.auctionEstablished;
      }, (error) => {
        this.alertService.error('Error retrieving property.');
      });

    this.subscriptions.push(this.getPropertySubscription);
  }

  confirmPropertyOwnership() {
    return this.property.wholesaler_id === this.authService.loggedInUser() ? true : false;
  }

  addPhoto(event) {
    let file = event.target.files[0];
    let fileType = file["type"];
    if (this.validateService.validatePhotoInput(fileType)) {
      this.photo = event.target.files[0];
      this.photosToAdd.push(this.photo);
      document.getElementById('selectedFiles').innerHTML += file.name + "</br>";
      this.showRemovePhotosButton = true;
      this.showUploadPhotosButton = true;

      if (this.property.photos.length + this.photosToAdd.length === 3) {
        let inputButton = (<HTMLInputElement>document.getElementById('imageInput'));
        inputButton.disabled = true;
      }
    } else {
      this.alertService.error('Please add a valid photo image.');
    }

  }

  uploadPhotos(event) {
    document.getElementById('uploadPhotos').setAttribute('disabled', 'disabled');
    document.getElementById('removePhotos').setAttribute('disabled', 'disabled');
    this.photosService.uploadPropertyPhotos(this.photosToAdd, (error, photosUploaded) => {
      if (error) {

      } else {
        let inputValue = (<HTMLInputElement>document.getElementById('imageInput'));
        inputValue.value = "";

        this.showRemovePhotosButton = false;
        this.showUploadPhotosButton = false;

        this.photosToAdd = [];

        photosUploaded.forEach((photo) => {
          this.photoURLsAdded.push(photo);
        });

        document.getElementById("selectedFiles").innerHTML = '';

        this.photosService.getPropertyPhotoUrls(photosUploaded, (error, photos) => {
          if (error) {
            this.alertService.error('Error uploading photos.');
            return;
          } else {
            photos.forEach((photo) => {
              this.property.photos.push(photo);
            });
          }
        });
      }
    })
  }

  removePhoto(photo) {
    this.photosService.removePropertyPhoto(photo, (error) => {
      if (error) {
        this.alertService.error('Error removing photo. Please try again.');
      } else {
        this.alertService.error('Successfully removed photo.');
      }
    });
  }

  onSubmit() {
    this.editPropertySubscription = this.editPropertyService.editProperty(this.property)
      .subscribe((response) => {
        if (response.success) {
          this.alertService.success('Changes saved.');
          this.router.navigate(['/dashboard']);
       }
      }, (error) => {
        this.alertService.error('Error editing property.');
      });

    this.subscriptions.push(this.editPropertySubscription);
  }

  edit() {
    this.editMode = true;
  }

  imageModal(photo) {
    this.enlargedPhoto = photo;
    $("#photoModal").modal('show');
  }

  sold() {
    let soldConfirm = confirm("Are you sure you want to mark this property as sold?");
    if (soldConfirm) {
      this.viewPropertyService.setSoldProperty(this.property);
      this.router.navigate(['/soldproperty/', this.property._id]);
    }
  }

  listed() {
    let listedConfirm = confirm("Are you sure you want to mark this property as listed?");
    if (listedConfirm) {
      this.property.status = "Listed";
      this.editPropertyListedSubscription = this.editPropertyService.editProperty(this.property)
        .subscribe((response) => {
          if (response.success) {
          }
        }, (error) => {
          this.alertService.error('Error marking property as listed.', true);
        });

      this.subscriptions.push(this.editPropertyListedSubscription);
    }
  }

  cancel() {
    this.deletePropertyService.removePhotos(this.photoURLsAdded);
    this.editMode = false;
  }

  deleteProperty() {
    let deleteConfirm = confirm("Are you sure you want to delete this property?");
    if (deleteConfirm) {
      this.deletePropertyService.removePhotos(this.property.photos);
      this.deletePropertySubscription = this.deletePropertyService.deleteProperty(this.property._id, this.wholesalerID)
        .subscribe((response) => {
          if (response.success) {
            this.alertService.success('Deleted property successfully.');
            this.router.navigate(['/dashboard']);
          }
        },(error) => {
          this.alertService.error('Error deleting property.', true);
        });

      this.subscriptions.push(this.deletePropertySubscription);
    }
  }

  customizeProperty() {
    this.customizePropertyService.setProperty(this.property);
    this.router.navigate(['/customizeproperty/', this.property._id]);
  }

  // called when auction has not been established for a property
  // and loggedInUser is wholesaler && owner of property
  openAuction() {
    $("#deadlineModal").modal('show');
  }

  // called when auction has been established for a property
  // user can be either investor or wholesaler
  enterAuction() {
    let that = this;
    let propertyId = this.property._id.toString();
    this.auctionService.setProperty(this.property);
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

    if (month < this.currentMonth) {
      currentYear = currentYear + 1;
    }

    if (this.dateTime.time == 'pm') {
      let hour = parseInt(this.dateTime.hour);
      this.dateTime.hour = hour + 12;
    }

    let deadline = this.dateTime.month + ' ' + this.dateTime.day + ', ' + currentYear + ' ' +
                   this.dateTime.hour + ':' + this.dateTime.minutes + ':00';
    this.openAuctionSubscription = this.auctionService.openAuction(this.propertyID, deadline)
      .subscribe((response) => {
        this.auctionService.setProperty(response);
        this.router.navigate(['/auction/', this.propertyID]);
      }, (error) => {

      })

    this.subscriptions.push(this.openAuctionSubscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }


}

