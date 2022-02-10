import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer } from 'rxjs';
import { Apod } from '../model/apod';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  readonly observer = {
    next: (data: any) => {
      this.apodData = new Apod(data);
      this.apodData$.next(this.apodData);
      console.log(data);
    },
    error: (err: any) => {
      console.log(err);
    },
    complete: () => {
      console.log('done');
    }
  };
  
  apodData = new Apod();
  // behavior subject
  apodData$ = new BehaviorSubject<Apod>(this.apodData);

  constructor(private http: HttpClient) { }

  getApod(): void {
    // current date in format yyyy-mm-dd
    const today = new Date();
    const date = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');
    console.log(date + ':' + this.apodData.date);
    if(this.apodData.date !== date) {
      this.http.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').subscribe(this.observer);
    }
  }
}
