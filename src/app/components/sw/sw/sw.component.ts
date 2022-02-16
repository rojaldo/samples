import { Component, OnInit } from '@angular/core';
import { SwService } from 'src/app/services/sw.service';

@Component({
  selector: 'app-sw',
  templateUrl: './sw.component.html',
  styleUrls: ['./sw.component.scss']
})
export class SwComponent implements OnInit {

  people: any[] = [];
  count = 0;
  page = 1;

  constructor(private service: SwService) { }

  ngOnInit(): void {
    this.service.people$.subscribe(people => {
      this.people = this.service.people[this.page-1];
    });
    this.service.peopleCount$.subscribe(count => {
      this.count = count;
    });
    this.service.getSWPeople();
  }

  handleChange() {

    this.service.getSWPeople(this.page - 1);
  }

}
