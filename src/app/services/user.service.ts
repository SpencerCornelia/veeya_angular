import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';

import { User } from '../models/User';

import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http, private authService: AuthService) { }

  private serverApi = 'https://api.getveeya.com:3000';

  public getAllUsers():Observable<User[]> {
    let URI = this.serverApi + "/user/all";
    return this.http.get(URI)
      .map(res => res.json())
      .map(res => <User[]>res.data);
  }

  public getAllInvestors() {
    let URI = this.serverApi + "/investor/all";
    let headers = new Headers();
    headers.append('Authorization', this.authService.loggedInUserToken());
    return this.http.get(URI, { headers: headers })
      .map(res => res.json())
      .map(res => <User[]>res.data)
  }

  public getAllWholesalers() {
    let URI = this.serverApi + "/wholesaler/all";
    return this.http.get(URI)
      .map(res => res.json())
      .map(res => <User[]>res.data)
  }

  public getAllLenders() {
    let URI = this.serverApi + "/lender/all";
    return this.http.get(URI)
      .map(res => res.json())
      .map(res => <User[]>res.data)
  }

  public getUserById(id):Observable<User> {
    let URI = this.serverApi + "/user/" + id;
    return this.http.get(URI)
      .map(res => res.json())
      .map(res => <User>res.data)
  }

  public updateUserProfile(user: User) {
    let userId = this.authService.loggedInUser();
    let URI = this.serverApi + `/user/updateProfileInfo/${userId}`;
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    let body = JSON.stringify({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      city: user.city,
      state: user.state,
      URLs: {
        personal: user.URLs.personal,
        facebook: user.URLs.facebook,
        linkedIn: user.URLs.linkedIn,
        biggerPockets: user.URLs.biggerPockets
      }
    });
    return this.http.put(URI, body, { headers: headers })
      .map(res => res.json())
      .map((response) => {
        return response.data;
      })
  }

  public updateUserProfilePhoto(url: String) {
    let userId = this.authService.loggedInUser();
    let URI = this.serverApi + `/user/updateProfilePhoto/${userId}`;
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    let body = JSON.stringify({
      _id: userId,
      photoURL: url
    });
    return this.http.put(URI, body, { headers: headers })
      .map(res => res.json())
      .map(res => res.data)
  }

  public updatePassword(currentPassword: String, newPassword: String) {
    let userId = this.authService.loggedInUser();
    let URI = this.serverApi + `/user/updatePassword/${userId}`;
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    let body = JSON.stringify({
      _id: userId,
      currentPassword: currentPassword,
      newPassword: newPassword
    });
    return this.http.put(URI, body, { headers: headers })
      .map(res => res.json())
      .map(res => res.data)
  }

  public increaseProfileViews(userId: string, currentUser: string) {
    let URI = this.serverApi + "/user/increaseViews";
    let headers = new Headers;
    let body = JSON.stringify({
      id: userId,
      viewingUserId: currentUser
    });
    headers.append('Content-Type', 'application/json');
    return this.http.put(URI, body, { headers: headers })
      .map(res => res.json())
      .map(res => res.data)
  }

  public deleteUser(userId: string) {
    let URI = this.serverApi + `/user/deleteuser/${userId}`;
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    return this.http.delete(URI, { headers: headers })
      .map(res => res.json())
      .map(res => res)
  }

}
