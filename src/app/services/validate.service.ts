import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class ValidateService {

  constructor(private http: Http) { }

  validateRegister(user) {
    if (!user.firstName || !user.lastName || !user.email) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
    let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }

  validatePhoneNumber(phoneNumber) {
    // add validation
  }

  validateLogin(user) {
    if (!user.email || !user.password) {
      return false;
    } else {
      return true;
    }
  }

  validatePhotoInput(fileType) {
    if (fileType == 'image/jpeg' || fileType == 'image/png' || fileType == 'image/jpg') {
      return true;
    } else {
      return false;
    }
  }

  validateUploadListInput(fileType) {
    if (fileType == 'csv' || fileType == 'text/csv') {
      return true;
    } else {
      return false;
    }
  }

}
