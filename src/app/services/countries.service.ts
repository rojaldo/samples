import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  countries: any[] = [];
  countries$ = new BehaviorSubject(this.countries);

  observer = {
    next: (value: any) => {
      console.log(value);
      this.countries = value;
      this.countries$.next(this.countries);
    },
    error: (error: any) => {
      console.error(error);
    },
    complete: () => {
      console.log('complete');
    }

  };

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get('https://restcountries.com/v3.1/all').subscribe(this.observer);
  }
}
