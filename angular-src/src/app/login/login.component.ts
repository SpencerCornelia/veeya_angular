import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ValidateService } from '../services/validate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginUser: any;

  constructor(private authService: AuthService,
              private router: Router,
              private validateService: ValidateService) { }

  ngOnInit() {
    this.loginUser = {
      email: '',
      password: ''
    }
  }

  onLoginSubmit() {
    if(!this.validateService.validateLogin(this.loginUser)) {
      // error message = 'Please enter valid info for all fields.'
      return false;
    }

    if (!this.validateService.validateEmail(this.loginUser.email)) {
      // error message = 'Please enter a valid login.'
      return false;
    }

    this.authService.authenticateUser(this.loginUser);
  }

}
