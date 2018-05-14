import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Property } from '../models/Property';
import * as firebase from 'firebase';

import 'rxjs/add/operator/map';

@Injectable()
export class DeletePropertyService {

  constructor(private http: Http) { }

  private serverApi = 'https://api.getveeya.com:3000';

  public deleteProperty(propertyId : Number, userId: string) {
    let URI = this.serverApi + "/properties/" + propertyId + "/" + userId;
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    return this.http.delete(URI, {headers})
      .map(res => res.json());
  }

  public removePhotos(photos: Array<string>) {
    photos.forEach((photo) => {
      let deleteReference = firebase.storage().refFromURL(photo);
      deleteReference.delete()
        .then(() => {
          // File deleted successfully
        })
        .catch((error) => {
          console.error(error);
        })
    })
  }

}
