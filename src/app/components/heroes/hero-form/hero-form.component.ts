import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  @Output() onNewHero = new EventEmitter<string>();

  heroName = '';
  myClass = 'btn btn-primary';

  constructor() { }

  ngOnInit(): void {
  }

  addHero() {
    this.onNewHero.emit(this.heroName);
    this.heroName = '';
  }

  IsHeroNameEmpty(): boolean {
    return this.heroName === '';
  }

}
