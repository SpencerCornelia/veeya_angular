import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { User } from '../models/User';
import { AlertService } from '../services/alert.service';
import { AuthService } from '../services/auth.service';
import { PhotosService } from '../services/photos.service';
import { UserService } from '../services/user.service';
import { ValidateService } from '../services/validate.service';

declare var $: any;

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit, OnDestroy {

  private getCurrentUserSubscription;
  private deleteUserSubscription;
  private updatePasswordSubscription;
  private updateProfilePhotoSubscription;
  private updateUserProfileSubscription;
  private subscriptions: Subscription[] = [];

  private currentUser: User;
  private currentUserId: string;
  private defaultProfilePhoto: string = 'https://firebasestorage.googleapis.com/v0/b/veeya-c0185.appspot.com/o/default-profile-image%2Fdefault-profile-image.jpg?alt=media&token=cb5fd586-a920-42eb-9a82-59cc9020aaed';
  private edit: Boolean = false;
  private password: any;
  private photo: File;
  private saveCurrentUser: User;

  constructor(private alertService: AlertService,
              private authService: AuthService,
              private photosService: PhotosService,
              private route: ActivatedRoute,
              private userService: UserService,
              private validateService: ValidateService) { }

  ngOnInit() {
    this.password = {
      current: '',
      new: '',
      newConfirm: ''
    }

    this.route.data.forEach(resolveData => {
      this.currentUser = resolveData.user.data;
      this.saveCurrentUser = JSON.parse(JSON.stringify(this.currentUser));
      this.currentUserId = this.authService.loggedInUser();
    });

  }

  onSubmit() {
    this.updateUserProfileSubscription = this.userService.updateUserProfile(this.currentUser)
      .subscribe((response) => {
        this.currentUser = response;
      }, (error) => {
        this.alertService.error('Unable to update user profile.');
      });

    this.subscriptions.push(this.updateUserProfileSubscription);
  }

  cancelEditInfo(event) {
    event.preventDefault();
    this.currentUser = this.saveCurrentUser;
    this.edit = !this.edit;
  }

  getCurrentUser() {
    this.getCurrentUserSubscription = this.authService.getLoggedInUser()
      .subscribe((response) => {
        this.currentUser = response.data;
      }, (error) => {
        this.alertService.error('Error loading user profile.');
      });

    this.subscriptions.push(this.getCurrentUserSubscription);
  }

  isDisabled() {
    return !this.edit;
  }

  editProfile() {
    this.edit = !this.edit;
  }

  addProfileImage(event) {
    let file = event.target.files[0];
    let fileType = file["type"];
    if (this.validateService.validatePhotoInput(fileType)) {
      this.photo = file;
      document.getElementById("updatePhotoButton").removeAttribute('disabled');
    } else {
      this.alertService.error('Please upload an image file.');
    }
  }

  uploadProfilePhoto() {
    this.photosService.uploadProfileImagePhoto(this.photo, (error, photo) => {
      if (error) {
        this.alertService.error('Error uploading photo. Please try again.');
      } else {
        let inputValue = (<HTMLInputElement>document.getElementById('imageInput'));
        inputValue.value = "";
        this.photosService.getProfileImageUrl(photo, (error, firebasePhoto) => {
          if (error) {
            this.alertService.error('Error uploading photo. Please try again.');
            return;
          } else {
            if (this.currentUser.profilePhoto != this.defaultProfilePhoto) {
              this.photosService.removePropertyPhoto(this.currentUser.profilePhoto, (error, success) => {
                if (error) {
                  this.alertService.error('Error uploading photo. Please try again.');
                } else {
                  this.updateProfilePhotoSubscription = this.userService.updateUserProfilePhoto(firebasePhoto)
                    .subscribe((response) => {
                      this.currentUser.profilePhoto = firebasePhoto;
                    }, (error) => {
                      this.alertService.error('Error uploading photo. Please try again.');
                    });
                }
              });
            }
          }
        });
      }
    });
  }

  updatePassword() {
    this.updatePasswordSubscription = this.userService.updatePassword(this.password.current, this.password.new)
      .subscribe((response) => {
        this.clearPasswordForm();
        this.alertService.success('Password updated.');
      }, (error) => {
        this.clearPasswordForm();
        this.alertService.error('Error updating password.');
      });

    this.subscriptions.push(this.updatePasswordSubscription);
  }

  clearPasswordForm() {
    this.password.current = '';
    this.password.new = '';
    this.password.newConfirm = '';
  }

  onDelete() {
    let confirm = window.confirm("Are you sure you would like to delete your user? We are sad to see you go.");
    if (confirm) {
      this.deleteUserSubscription = this.userService.deleteUser(this.currentUserId)
        .subscribe((response) => {
          this.authService.logout();
        }, (error) => {
          this.alertService.error('Error deleting user.', true);
        });

      this.subscriptions.push(this.deleteUserSubscription);
    } else {
      this.alertService.success('We are glad to see you have changed your mind and are staying with us. Time to make some money!');
    }
  }

  clickProfileImageTab() {
    document.getElementById("updatePhotoButton").setAttribute('disabled', 'disabled');
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

}
