import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Property } from '../models/Property';

import 'rxjs/add/operator/map';

@Injectable()
export class GetUserPropertiesService {

  constructor(private http: Http) { }

  private serverApi = 'http://localhost:3000/properties';

  public getWholesalerUserProperties(wholesalerID) :Observable<Property[]> {
    let URI = this.serverApi + "/wholesaler/" + wholesalerID;
    return this.http.get(URI)
      .map(res => res.json())
      .map(res => <Property[]>res.data);
  }

  public getInvestorUserProperties(investorID) :Observable<Property[]> {
    let URI = this.serverApi + "/investor/" + investorID;
    return this.http.get(URI)
      .map(res => res.json())
      .map(res => <Property[]>res.data)
  }

  public getLenderUserProperties(lenderID) :Observable<Property[]> {
    let URI = this.serverApi + "/lender" + lenderID;
    return this.http.get(URI)
      .map(res => res.json())
      .map(res => <Property[]>res.data)
  }

  public getStarredProperties(investorId) :Observable<Property[]> {
    let URI = this.serverApi + '/starproperties/' + investorId;
    return this.http.get(URI)
      .map(res => res.json())
      .map(res => <Property[]>res.data)
  }

}