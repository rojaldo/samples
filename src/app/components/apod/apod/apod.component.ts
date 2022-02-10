import { Component, OnInit } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';
import { Observer } from 'rxjs';
import { Apod } from 'src/app/model/apod';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  data = new Apod();

  constructor(private service: ApodService) { }

  ngOnInit(): void {
    // declare observer
    this.service.getApod();
    this.service.apodData$.subscribe(
      (data: Apod) => {
        this.data = data;
      });

  }

}
