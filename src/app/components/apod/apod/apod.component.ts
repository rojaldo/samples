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
    let observer: Observer<any>;
    observer = {
      next: (data) => {
        this.data = new Apod(data);
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('done');
      }
    };
    this.service.getApod().subscribe(observer);

  }

}
