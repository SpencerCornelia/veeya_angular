import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  constructor(private http: Http) {}

  getWholesalerProfileInfo(wholesalerID) {
    let route = 'https://api.getveeya.com:3000/wholesaler/' + wholesalerID;
    return this.http.get(route)
      .map(res => res.json())
      .map(res => res.data);
  }

  getInvestorProfileInfo(investorID) {
    let route = 'https://api.getveeya.com:3000/investor/' + investorID;
    return this.http.get(route)
      .map(res => res.json())
      .map(res => res.data);
  }
}