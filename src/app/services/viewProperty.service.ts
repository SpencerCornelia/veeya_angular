import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Property } from '../models/Property';

import 'rxjs/add/operator/map';


@Injectable()
export class ViewPropertyService {

  private soldProperty = new BehaviorSubject<Property>(null);

  constructor(private http: Http) { }

  private serverApi = 'https://api.getveeya.com:3000/properties';

  public getPropertyById(propertyId: String):Observable<Property> {
    let URI = this.serverApi + "/property/" + propertyId;
    return this.http.get(URI)
      .map(res => res.json())
      .map(res => <Property>res.data);
  }

  public setSoldProperty(property: Property) {
    this.soldProperty.next(property);
  }

  public getSoldProperty() {
    return this.soldProperty.asObservable();
  }

}
