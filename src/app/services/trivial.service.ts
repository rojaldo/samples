import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from '../model/card';

@Injectable({
  providedIn: 'root'
})
export class TrivialService {

  cards: Card[] = [];
  cards$ = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) { }

  getTrivial() {
    const observer = {
      next: (data: any) => {
        for (const json of data.results) {
          this.cards.push(new Card(json));
        }
        this.cards$.next(this.cards);
        console.log('Observer got a next value: ' + data)
      },
      error: (err: any) => console.error('Observer got an error: ' + err),
      complete: ()=>{}
    };
    return this.http.get('https://opentdb.com/api.php?amount=10').subscribe(observer);
  }
}
