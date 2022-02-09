import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { CalculatorService } from 'src/app/services/calculator.service';



@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  display = '';

  constructor(private service: CalculatorService) { }

  ngOnInit(): void {
    this.display = this.service.displayValue;
  }


  handleClick(value: number | string) {
    this.display = this.service.process(value);
  }


}
