import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Property } from '../models/Property';

import 'rxjs/add/operator/map';

@Injectable()
export class AddPropertyService {

  constructor(private http: Http) { }

  private serverApi = 'https://api.getveeya.com:3000/properties';

  public addProperty(property: Property) {
    let URI = this.serverApi + "/addproperty";
    let headers = new Headers;
    let body = JSON.stringify({
      _id: property._id,
      wholesaler_id: property.wholesaler_id,
      address: property.address,
      city: property.city,
      state: property.state,
      zipCode: property.zipCode,
      purchasePrice: property.purchasePrice,
      bedrooms: property.bedrooms,
      bathrooms: property.bathrooms,
      expectedRehab: property.expectedRehab,
      afterRepairValue: property.afterRepairValue,
      HOA: property.HOA,
      capRate: property.capRate,
      propertyTaxes: property.propertyTaxes,
      utilities: property.utilities,
      averageRent: property.averageRent,
      squareFootage: property.squareFootage,
      propertyType: property.propertyType,
      yearBuilt: property.yearBuilt,
      sellerFinancing: property.sellerFinancing,
      status: property.status,
      insurance: property.insurance,
      comps: property.comps,
      photos: property.photos
    });
    headers.append('Content-Type', 'application/json');
    return this.http.post(URI, body, {headers: headers})
      .map((response) => {
        return response.json();
      })
      .catch((error) => {
        return Observable.throw(error.json());
      });
  }
}
