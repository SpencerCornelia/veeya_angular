import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/User';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

declare var $: any;

@Injectable()
export class InviteService {

  constructor(private http: Http) { }

  private serverApi = 'https://api.getveeya.com:3000/';

  public inviteUser(email: string, userType: string, currentUserId: string) {
    let URI = this.serverApi + "user/inviteuser";
    let headers = new Headers;
    let body = JSON.stringify({
      _id: 0,
      email: email,
      userType: userType,
      currentUserId: currentUserId
    });
    headers.append('Content-Type', 'application/json');
    return this.http.post(URI, body, { headers: headers })
      .map((response) => {
        return response.json();
      })
      .catch((error) => {
        return Observable.throw(error.json());
      })
  }

}