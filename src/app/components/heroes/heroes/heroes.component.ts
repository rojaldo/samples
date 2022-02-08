import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes = ['Batman', 'Superman', 'Spiderman'];
  heroName = '';
  myClass = 'btn btn-primary';

  constructor() { }

  ngOnInit(): void {
  }

  addHero() {
    this.heroes.push(this.heroName);
    this.heroName = '';
  }

  IsHeroNameEmpty(): boolean {
    return this.heroName === '';
  }

}
