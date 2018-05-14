import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Property } from '../models/Property';
import { User } from '../models/User';

import 'rxjs/add/operator/map';

@Injectable()
export class SoldPropertyService {

  constructor(private http: Http) { }

  private serverApi = 'http://localhost:3000/properties';

  public soldPropertyPending(property: Property, investorId: Number) {
    let URI = this.serverApi + "/soldpropertypending";
    let headers = new Headers;
    let body = JSON.stringify({
      property: property,
      investorId: investorId
    });
    headers.append('Content-Type', 'application/json');
    return this.http.post(URI, body, {headers: headers})
      .map((response) => {
        return response.json();
      })
      .map((response) => {
        return response.data;
      })
      .catch((error) => {
        return Observable.throw(error.json());
      });
  }

  public acceptSoldProperty(property: Property, investorId: Number) {
    let URI = this.serverApi + "/soldpropertyaccepted";
    let headers = new Headers;
    let body = JSON.stringify({
      property: property,
      investorId: investorId
    });
    headers.append('Content-Type', 'application/json');
    return this.http.post(URI, body, { headers: headers })
      .map((response) => {
        return response.json();
      })
      .map((response) => {
        return response.data;
      })
      .catch((error) => {
        return Observable.throw(error.json())
      })
  }

  public denySoldProperty(property: Property, investorId: Number) {
    let URI = this.serverApi + "/denysoldproperty";
    let headers = new Headers;
    let body = JSON.stringify({
      property: property,
      investorId: investorId
    });
    headers.append('Content-Type', 'application/json');
    return this.http.post(URI, body, { headers: headers })
      .map((response) => {
        return response.json();
      })
      .map((response) => {
        return response.data;
      })
      .catch((error) => {
        return Observable.throw(error.json())
      })
  }
}
