import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../services/auth.service';

import 'rxjs/add/operator/map';

@Injectable()
export class DashboardService {

  constructor(private authService: AuthService,
              private http: Http) { }

  private serverApi = 'https://api.getveeya.com:3000';

  public getData() {
    let userId = this.authService.loggedInUser();
    let route = this.serverApi + `/dashboard/${userId}`;
    return this.http.get(route)
      .map(res => res.json())
      .map(res => res.data)
  }

}
