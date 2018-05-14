import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../services/auth.service';
import { User } from '../models/User';

import { ReplaySubject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class GetConnectionsService {

  constructor(private http: Http, private authService: AuthService) { }

  private pendingConnections = new ReplaySubject(1);
  private numberOfPendingConnections = new ReplaySubject(1);
  private newPendingConnections: any;

  private serverApi = 'https://api.getveeya.com:3000';

  public getConnectionsForUser(userId: String):Observable<User[]> {
    let URI = this.serverApi + `/user/connections/${userId}`;
    return this.http.get(URI)
      .map(res => res.json())
      .map(res => <User[]>res.data);
  }

  getPendingConnections() {
    let userId = this.authService.loggedInUser();
    let URI = this.serverApi + `/user/pendingconnections/${userId}`;

   return this.http.get(URI)
     .map((response) => {
       let responseJSON = response.json();
       this.setAllPendingConnections(responseJSON.data);
       this.increasePendingConnections(responseJSON.data.length);
       return;
      })
      .catch((error) => {
        return Observable.throw(error.json());
      })
  }

  getAllPendingConnections() {
    return this.pendingConnections.asObservable();
  }

  setAllPendingConnections(connections) {
    this.pendingConnections.next(connections);
  }

  getNumberOfPendingConnections() {
    return this.numberOfPendingConnections.asObservable();
  }

  increasePendingConnections(newNumber) {
    this.numberOfPendingConnections.next(newNumber);
  }

  reducePendingConnections(newNumber) {
    this.numberOfPendingConnections.next(newNumber);
  }

}