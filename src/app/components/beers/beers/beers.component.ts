import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/model/beer';
import { BeersService } from 'src/app/services/beers.service';
import { Options } from "@angular-slider/ngx-slider";

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  beers: Beer[] = [];
  showBeers: Beer[] = [];

  value: number = 0;
  highValue: number = 5;
  options: Options = {
    floor: 0,
    ceil: 60
  };

  constructor(private service: BeersService) { }

  ngOnInit(): void {
    this.service.beers$.subscribe(data => {
      this.beers = data;
      this.showBeers = data;
      this.filterBeers(this.value, this.highValue);

    });
    this.service.getBeers();
  }

  handleChange(event: any) {
    console.log(event);
    this.filterBeers(event.value, event.highValue);
  }

  filterBeers(value: number, highValue: number) {
    this.showBeers = this.beers
      .filter(beer => beer.abv >= value && beer.abv <= highValue)
      .sort((a, b) => a.abv - b.abv);
  }


}
