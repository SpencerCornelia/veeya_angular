import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class UploadListService {

  constructor(private http: Http) { }

  private serverApi = 'http://localhost:3000/';

  public uploadList(list, currentUserId) {
    let URI = this.serverApi + "user/uploadList";
    let headers = new Headers;
    let body = JSON.stringify({
      list: list,
      connectionId: currentUserId
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
        return Observable.throw(error.json());
      })
  }


}