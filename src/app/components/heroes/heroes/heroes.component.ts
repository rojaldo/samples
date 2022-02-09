import { Component, OnDestroy, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit, OnDestroy {

  heroes: Hero[] = [];

  constructor(private service: HeroService) { }

  ngOnInit(): void {
    console.log('HeroesComponent.ngOnInit()');
    this.heroes = this.service.getHeroes();
    this.service.heroes$.subscribe(heroes => this.heroes = heroes);
  }

  ngOnDestroy(): void {
    // unsubscribe from the observable
    // this.service.heroes$.unsubscribe();
    console.log('HeroesComponent.ngOnDestroy()');
  }

  addHero(hero: Hero) {
    this.service.addHero(hero);
    // this.heroes = this.service.getHeroes();
  }


}
