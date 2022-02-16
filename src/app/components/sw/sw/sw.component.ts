import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private service: SwService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.page = params['page'];
    });

    this.service.people$.subscribe(people => {
      this.people = this.service.people[this.page - 1];
    });
    this.service.peopleCount$.subscribe(count => {
      this.count = count;
    });
    this.service.getSWPeople();
  }

  handleChange() {
    console.log('page: ' + this.page);
    if (this.page !== NaN) {
      this.service.getSWPeople(this.page - 1);
    }
  }

}
