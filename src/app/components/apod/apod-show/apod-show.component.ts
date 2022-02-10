import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Apod } from 'src/app/model/apod';
// import momentjs
import * as moment from 'moment';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod-show',
  templateUrl: './apod-show.component.html',
  styleUrls: ['./apod-show.component.scss']
})
export class ApodShowComponent implements OnInit, OnChanges {

  @Input() date = moment().format('YYYY-MM-DD');
  data = new Apod();
  constructor(private service: ApodService) { }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
    
    this.service.apodData$.subscribe(
      (data: Apod) => {
        this.data = data;
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.service.getApod(this.date);
  }


}
