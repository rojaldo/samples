import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../model/hero';

@Injectable()
export class HeroService {

  private heroes: Hero[] = [
    new Hero('Superman', 'Clark Kent'),
    new Hero('Batman', 'Bruce Wayne'),
    new Hero('Spiderman', 'Peter Parker'),
  ];

  // BehaviorSubject for heroes
  heroes$ = new BehaviorSubject<Hero[]>(this.heroes);

  constructor() { }

  getHeroes(): Hero[] {
    return [...this.heroes];
  }

  addHero(hero: Hero) {
    this.heroes.push(hero);
  }


}
