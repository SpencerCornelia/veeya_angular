import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { AlertService } from '../services/alert.service';
import { AuthService } from '../services/auth.service';
import { UploadListService } from '../services/uploadListService';
import { ValidateService } from '../services/validate.service';

import { User } from '../models/User';

@Component({
  selector: 'app-upload-list',
  templateUrl: './upload-list.component.html',
  styleUrls: ['./upload-list.component.css']
})
export class UploadListComponent implements OnInit, OnDestroy {

  private uploadListSubscription;
  private subscriptions: Subscription[] = [];

  private currentUser: string;
  private currentUserType: string;
  private list: File;
  private users: Array<any>;

  constructor(private alertService: AlertService,
              private authService: AuthService,
              private router: Router,
              private validateService: ValidateService,
              private uploadListService: UploadListService) { }

  ngOnInit() {
    document.getElementById('removeList').hidden = true;
    document.getElementById('uploadList').hidden = true;

    this.currentUser = this.authService.loggedInUser();
    this.currentUserType = this.authService.loggedInUserType();
  }

  uploadListInput(event) {
    this.list = event.target.files[0];
    let fileType = this.list["type"];

    if (this.list.size > 50000) {
      this.list = null;
      this.alertService.error('Image size is too large. Please upload image with a size of less than 50kb.');
      return;
    }
    if (this.validateService.validateUploadListInput(fileType)) {
      document.getElementById('listName').innerHTML += this.list.name + "</br>";
      document.getElementById('removeList').hidden = false;
      document.getElementById('uploadList').hidden = false;
      let inputButton = (<HTMLInputElement>document.getElementById('listInput'));
      inputButton.disabled = true;
    } else {
      this.alertService.error('File type is not correct. Please upload only .csv files.');
    }

  }

  uploadList() {
    let inputButton = (<HTMLInputElement>document.getElementById('listInput'));
    inputButton.disabled = true;

    let reader = new FileReader();
    reader.readAsText(this.list);

    reader.onload = this.loadHandler.bind(this);

    reader.onerror = this.errorHandler.bind(this);
  }

  removeList() {
    this.list = null;
    document.getElementById('listName').innerHTML = '';
    document.getElementById('removeList').hidden = true;
    document.getElementById('uploadList').hidden = true;
    let inputButton = (<HTMLInputElement>document.getElementById('listInput'));
    inputButton.disabled = false;
  }

  processData(csv) {
    let userType = '';
    if (this.currentUserType == 'Investor') {
      userType = 'Wholesaler';
    } else if (this.currentUserType == 'Wholesaler') {
      userType = 'Investor';
    }

    let allRows = csv.split(/\r\n|\n/);
    this.users = [];
    let errorExists = false;

    for (let i = 0; i < allRows.length; i++) {
      let row = allRows[i].split(',');

      let user = {
        email: row[0],
        userType: userType,
        connectionId: this.currentUser
      };

      this.users.push(user);
    }

    if (errorExists) {
      let confirm = window.confirm("Your list had at least one incorrect row. Would you like to continue with uploading your list?");
      if (confirm) {
        this.finishUpload();
      }
    } else {
      this.finishUpload();
    }

  }

  loadHandler(event) {
    let csv = event.target.result;
    this.processData(csv);
  }

  errorHandler(event) {
    if (event.target.error.name == 'NotReadableError') {
      this.alertService.error('Unable to read file. Please upload a .csv file.');
    }
  }

  finishUpload() {
    this.uploadListSubscription = this.uploadListService.uploadList(this.users, this.currentUser)
      .subscribe((response) => {
        this.alertService.success('Uploaded list successfully.', true);
        this.router.navigate(['/dashboard']);
      }, (error) => {
        this.alertService.error('Error uploading list.', true);
      });

    this.subscriptions.push(this.uploadListSubscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

}
