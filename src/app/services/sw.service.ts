import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwService {
// array of 10 empty objects
  people: any[] = [  [],  [],  [],  [],  [],  [],  [],  [],  [],  []  ];
  people$ = new BehaviorSubject<any[]>([]);
  private peopleCount = 0;
  peopleCount$ = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) { }

  getSWPeople(page = 0): void {
    let observer = {
      next: (data: any) => {
        this.people[page] = data.results;
        this.people$.next(this.people[page]);
        console.log('Observer got a next value: ' + data)
        if(this.peopleCount === 0){
          this.peopleCount = data.count;
          this.peopleCount$.next(this.peopleCount);
        }
      },
      error: (err: any) => console.error('Observer got an error: ' + err),
      complete: () => { }
    }
    console.log(this.people[page] + ' : ' + {});
    // check if the page is already loaded
    if (this.people[page].length === 0) {
      console.log('getSWPeople(): ' + page);
      this.http.get('https://swapi.dev/api/people/?page=' + (page + 1)).subscribe(observer);
    } else {
      this.people$.next(this.people[page]);
    }
  }

  get countValue(): number {
    return this.peopleCount;
  }
}