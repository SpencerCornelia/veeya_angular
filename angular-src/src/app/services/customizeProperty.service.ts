import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Property } from '../models/Property';

import { ReplaySubject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomizePropertyService {

  private property = new ReplaySubject(1);
  private customizedProperty: Property;
  public customizedPropertyExists: boolean = false;

  constructor() { }

  public setProperty(property: Property) {
    this.property.next(property);
  }

  public getProperty() {
    return this.property.asObservable();
  }

  public setCustomizedProperty(property: Property) {
    this.customizedProperty = property;
    this.customizedPropertyExists = true;
  }

  public getCustomizedProperty() {
    return this.customizedProperty;
  }

}
