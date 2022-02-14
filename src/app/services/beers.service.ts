import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Beer } from '../model/beer';

@Injectable({
  providedIn: 'root'
})
export class BeersService {
  readonly observer = {
    next: (data: any) => {
      this.beers = []
      for (const json of data) {
        this.beers.push(new Beer(json));
      }
      this.beers$.next(this.beers);
      console.log('next: ', data)
    },
    error: (err: any) => console.log('error: ', err),
    complete: () => console.log('complete')
  };

  beers: Beer[] = [];
  beers$ = new BehaviorSubject(this.beers);

  constructor(private http: HttpClient) { 

  }

  getBeers() {
    this.http.get('https://api.punkapi.com/v2/beers').subscribe(this.observer);

  }


}
