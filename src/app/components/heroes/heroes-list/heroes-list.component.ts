import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

  @Input() myHeroes: Hero[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }

  removeHero(value: number) {
    this.myHeroes.splice(value, 1);
  }

}
