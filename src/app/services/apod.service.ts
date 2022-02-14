import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer } from 'rxjs';
import { Apod } from '../model/apod';

const APIKEY = 'tqz634Z1x0LiJzjbhSyUoExrZaGKLM0MG1VnROR6';

@Injectable()
export class ApodService {

  readonly observer = {
    next: (data: any) => {
      this.apodData = new Apod(data);
      this.apodDataList.push(this.apodData);
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
  apodDataList: Apod[] = [];
  // behavior subject
  apodData$ = new BehaviorSubject<Apod>(this.apodData);

  constructor(private http: HttpClient) { }

  getApod(selectedDate?: string): void {
    // current date in format yyyy-mm-dd
    let today = new Date();
    let date = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');
    if (selectedDate !== undefined) {
      date = selectedDate;
    }

    if (this.apodData.date !== date) {
      this.http.get(`https://api.nasa.gov/planetary/apod?api_key=${APIKEY}&date=${date}`).subscribe(this.observer);
    }
  }
}
