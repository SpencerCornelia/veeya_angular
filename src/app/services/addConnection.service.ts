import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/User';

import 'rxjs/add/operator/map';

@Injectable()
export class AddConnectionService {

  constructor(private http: Http) { }

  private serverApi = 'https://api.getveeya.com:3000';

  public addConnection(userId: string, connectionUserId: string):Observable<User[]> {
    let URI = this.serverApi + "/user/addconnection";
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    let body = JSON.stringify({
      currentUserId: userId,
      connectionUserId: connectionUserId
    });

    return this.http.post(URI, body, { headers: headers })
      .map(res => res.json())
      .map(res => <User[]>res.data);
  }

  public acceptConnection(userId: String, connectionUserId: string):Observable<any> {
    let URI = this.serverApi + "/user/acceptconnection";
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    let body = JSON.stringify({
      userId: userId,
      connectionUserId: connectionUserId
    });

    return this.http.post(URI, body, { headers: headers })
      .map(res => res.json())
      .map(res => <Object>res.data)
  }

  public denyConnection(userId: String, connectionUserId: string):Observable<any> {
    let URI = this.serverApi + "/user/denyconnection";
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    let body = JSON.stringify({
      userId: userId,
      connectionUserId: connectionUserId
    });
    return this.http.post(URI, body, { headers: headers })
      .map(res => res.json())
      .map(res => <Object>res.data)
  }

}
