import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import {Observable, of, OperatorFunction} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { forEachChild } from 'typescript';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  countries: any[] = [];

  public model: any;

  coutryNames : string[] = [];

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.coutryNames.filter(v => this.removeAccents(v).toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

    // remove accented characters
    removeAccents(str: string) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

  constructor(private service: CountriesService) { }

  ngOnInit(): void {
    this.service.countries$.subscribe(countries => {
      console.log('ngOnInit(): ' +countries);
      this.countries = countries;
      this.coutryNames = this.countries.map(country => country.translations.spa.common);
    });
    this.service.getCountries();
  }

}
