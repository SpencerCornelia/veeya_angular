import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireStorage } from 'angularfire2/storage';
import * as firebase from 'firebase';

import { AuthService } from './auth.service';

import 'rxjs/add/operator/map';

@Injectable()
export class PhotosService {

  private error: Boolean = false;
  private formData: FormData = new FormData();
  private photos: Array<File> = [];
  private photoURLs: Array<String> = [];
  private profileImageFolder: string;
  private propertyPhotosFolder: string;
  private user_id: String;

  constructor(private authService: AuthService,
              private storage: AngularFireStorage)
  {
    this.propertyPhotosFolder = 'property-photos';
    this.profileImageFolder = 'profile-images';
    this.user_id = this.authService.loggedInUser();
  }

  public uploadPropertyPhotos(photos: Array<File>, callback) {
    let storageRef = firebase.storage().ref();
    for (let i = 0; i < photos.length; i++) {
      let path = `${this.propertyPhotosFolder}/${this.user_id}/` + photos[i].name;
      let imageRef = storageRef.child(path);
      imageRef.put(photos[i])
        .then((snapshot) => {
          if (snapshot.state !== 'success') {
            this.error = true;
          } else {
            this.photoURLs.push(path);
            if (i == (photos.length - 1)) {
              if (!this.error) {
                callback(false, this.photoURLs);
              } else {
                callback(true);
              }
            }
          }
        });
    }
  }

  public uploadProfileImagePhoto(photo: File, callback) {
    let storageRef = firebase.storage().ref();
    let path = `${this.profileImageFolder}/${this.user_id}/` + photo.name;
    let imageRef = storageRef.child(path);
    imageRef.put(photo)
      .then((snapshot) => {
        if (snapshot.state !== 'success') {
          callback(true);
        } else {
          callback(false, path);
        }
      });
  }

  public removePropertyPhoto(photoName: String, callback) {
    let path = `${this.propertyPhotosFolder}/${this.user_id}/` + photoName;
    let storageRef = firebase.storage().ref(path);
    storageRef.delete()
      .then(() => {
        callback(false);
      })
      .catch((error) => {
        callback(true);
      });
  }

  public getPropertyPhotoUrls(photos: Array<string>, callback) {
    let urls = [];
    let storageRef = firebase.storage();
    let path = `${this.propertyPhotosFolder}/${this.user_id}/`;
    for (let i = 0; i < photos.length; i++) {
      let pathRef = storageRef.ref(photos[i]);
      pathRef.getDownloadURL()
        .then((url) => {
          urls.push(url);
        })
        .catch((error) => {
          callback(true);
          return;
        })
        .then(() => {
          if (i == (photos.length - 1)) {
            callback(false, urls);
          }
        })
    }
  }

  public getProfileImageUrl(photo: string, callback) {
    let urls = [];
    let storageRef = firebase.storage();
    let path = `${this.profileImageFolder}/${this.user_id}/` + photo;
    let pathRef = storageRef.ref(path);
    pathRef.getDownloadURL()
      .then((url) => {
        callback(false, url)
      })
      .catch((error) => {
        callback(true);
        return;
      })
   }

  public removePropertyPhotos(photo: string, callback) {
    let storageRef = firebase.storage().ref(photo);
    storageRef.delete()
      .then(() => {
        callback(false);
      })
      .catch((error) => {
        callback(true);
      });
  }


}
