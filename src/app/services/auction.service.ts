import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { Bid } from '../models/Bid';
import { Property } from '../models/Property';

import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/Rx';
import * as io from 'socket.io-client';
import 'rxjs/add/operator/map';

@Injectable()
export class AuctionService {

  private bids: Array<Bid> = [];
  private deadline: Date;
  private property = new ReplaySubject(1);

  public propertyExists: boolean = false;

  private socket;
  private api = 'https://api.getveeya.com:3000';

  constructor(private http: Http) {
    this.socket = io.connect(this.api);
  }

  ngOnInit() {
  }

  setProperty(property: Property) {
    this.property.next(property);
    this.propertyExists = true;
  }

  getProperty() {
    return this.property.asObservable();
  }

  getInitialBids(propertyId: string) {
    let URI = `https://api.getveeya.com:3000/bids/${propertyId}`;
    return this.http.get(URI)
      .map((res) => {
        return res.json()
      })
      .map((res) => {
        this.bids = res.data.bids;
        this.deadline = res.data.deadline;
        return res;
      });
  }

  getBidData() {
    return this.bids;
  }

  getDeadline() {
    return this.deadline;
  }

  getBids(): any {
    let observable = new Observable((observer) => {
      this.socket.on('new-bid', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      }
    });

    return observable;
  }

  sendBid(propertyId: string, user: any, amount: string) {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let newMinutes;
    if (minutes < 10) {
      newMinutes = minutes.toString();
      newMinutes = '0' + minutes;
    } else {
      newMinutes = minutes;
    }
    let time;
    if (hours > 12) {
      time = (hours - 12) + ':' + newMinutes + 'pm';
    } else if (hours == 12) {
      time = hours + ':' + newMinutes + 'pm';
    } else {
      time = hours + ':' + newMinutes + 'am';
    }
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();
    let year = new Date().getFullYear();
    let date = month + '-' + day + '-' + year;

    let bid = {
      propertyId: propertyId,
      amount: amount,
      bidPlacedTime: time,
      bidPlacedDate: date,
      profilePhoto: user.profilePhoto,
      firstName: user.firstName,
      lastName: user.lastName,
      city: user.city,
      state: user.state,
      userId: user._id
    }
    this.socket.emit('add-bid', bid);
  }

  openAuction(propertyId: string, deadline: any) {
    this.bids = [];

    let URI = `https://api.getveeya.com:3000/bids/openauction`;
    let headers = new Headers;
    let body = JSON.stringify({
      propertyId: propertyId,
      deadline: deadline
    });
    headers.append('Content-Type', 'application/json');
    return this.http.put(URI, body, { headers: headers })
      .map(res => res.json())
      .map(res => res.data)
  }

  endAuction(propertyId: string) {
    let today = new Date();
    let currentMonth = today.getMonth();

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let month = months[currentMonth];

    let day = today.getDate();
    let currentYear = today.getFullYear();
    let hour = today.getHours();
    let minutes = today.getMinutes();

    let newDeadline = month + ' ' + day + ', ' + currentYear + ' ' +
                      hour + ':' + minutes + ':00';

    let URI = `https://api.getveeya.com:3000/bids/endauction`;
    let headers = new Headers;
    let body = JSON.stringify({
      propertyId: propertyId,
      deadline: newDeadline
    });
    headers.append('Content-Type', 'application/json');
    return this.http.post(URI, body, { headers: headers })
      .map(res => res.json())
      .map(res => res.data)
  }

}