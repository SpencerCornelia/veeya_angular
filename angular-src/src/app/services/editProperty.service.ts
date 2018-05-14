import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Property } from '../models/Property';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class EditPropertyService {

  constructor(private http: Http) { }

  private serverApi = 'http://localhost:3000/properties';

  public getPropertyByID(id): Observable<Property> {
    let URI = this.serverApi + '/editproperty/' + id;
    return this.http.get(URI)
      .map((res) => {
        return JSON.parse((<any>res)._body);
      })
  }

  public editProperty(property: Property) {
    let URI = this.serverApi + "/editproperty/" + property._id;
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
      HOA: property.HOA,
      propertyTaxes: property.propertyTaxes,
      utilities: property.utilities,
      afterRepairValue: property.afterRepairValue,
      averageRent: property.averageRent,
      squareFootage: property.squareFootage,
      propertyType: property.propertyType,
      yearBuilt: property.yearBuilt,
      status: property.status,
      sellerFinancing: property.sellerFinancing,
      insurance: property.insurance,
      comps: property.comps,
      photos: property.photos
    });
    headers.append('Content-Type', 'application/json');
    return this.http.put(URI, body, { headers: headers })
      .map((response) => {
        return response.json();
      })
      .catch((error) => {
        return Observable.throw(error.json());
      })
  }

  public starProperty(investorId: string, property: Property) {
    let URI = this.serverApi + '/starproperty';
    let headers = new Headers;
    let body = JSON.stringify({
      investorId: investorId,
      property: property
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

    public unStarProperty(investorId: string, propertyId: string) {
    let URI = this.serverApi + '/unstarproperty';
    let headers = new Headers;
    let body = JSON.stringify({
      investorId: investorId,
      propertyId: propertyId
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