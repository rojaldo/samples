import { Component, OnInit } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';
import { Observer } from 'rxjs';
import { Apod } from 'src/app/model/apod';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
// import momentjs
import * as moment from 'moment';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  data = new Apod();
  // today date momentjs format
  dateString = moment().format('YYYY-MM-DD');


  constructor() { }

  ngOnInit(): void {

  }

  pickDate(date: string) {
    this.dateString = date;
  }

}
