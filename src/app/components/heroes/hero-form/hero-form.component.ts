import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  @Output() onNewHero = new EventEmitter<Hero>();

  hero = new Hero('', '');
  myClass = 'btn btn-primary';

  constructor() { }

  ngOnInit(): void {
  }

  addHero() {
    this.onNewHero.emit(this.hero);
    this.hero = new Hero('', '');
  }

  IsHeroNameEmpty(): boolean {
    return this.hero.emptyName();
  }

}
