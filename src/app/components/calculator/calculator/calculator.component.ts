import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

enum State {
  Init,
  FirstFigure,
  SecondFigure,
  Result
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  display = '';
  currentState = State.Init;
  firstFigure = 0;
  secondFigure = 0;
  result = 0;
  operator = '';

  constructor() { }

  ngOnInit(): void {
  }

  handleNumber(value: number) {
    switch (this.currentState) {
      case State.Init:
        this.firstFigure = value;
        this.currentState = State.FirstFigure;
        this.display += value;
        break;
      case State.FirstFigure:
        this.firstFigure = this.firstFigure * 10 + value;
        this.display += value;
        break;
      case State.SecondFigure:
        this.secondFigure = this.secondFigure * 10 + value;
        this.display += value;
        break;
      case State.Result:
        this.firstFigure = value;
        this.secondFigure = 0;
        this.result = 0;
        this.operator = '';
        this.currentState = State.FirstFigure;
        this.display = '' + value;
        break;
      default:
        break;
    }
  }

  isOperator(value: string) {
    return value === '+' || value === '-' || value === '*' || value === '/';
  }

  resolve(): number {
    switch (this.operator) {
      case '+':
        return this.firstFigure + this.secondFigure;
      case '-':
        return this.firstFigure - this.secondFigure;
      case '*':
        return this.firstFigure * this.secondFigure;
      case '/':
        return this.firstFigure / this.secondFigure;
      default:
        throwError;
        return -1;
    }
  }

  handleSymbol(value: string) {
    switch (this.currentState) {
      case State.Init:
        break;
      case State.FirstFigure:
        if (this.isOperator(value)) {
          this.operator = value;
          this.currentState = State.SecondFigure;
          this.display += value;
        }
        break;
      case State.SecondFigure:
        if (value === '=') {
          this.result = this.resolve();
          this.currentState = State.Result;
          this.display += value + this.result;
        }
        break;
      case State.Result:
        if (this.isOperator(value)) {
          this.operator = value;
          this.firstFigure = this.result;
          this.secondFigure = 0;
          this.result = 0;
          this.currentState = State.SecondFigure;
          this.display = this.firstFigure + this.operator;
        }
        break;
      default:
        break;
    }

  }

  handleClick(value: number | string) {
    if (typeof value === 'number') {
      this.handleNumber(value);
    } else if (typeof value === 'string') {
      this.handleSymbol(value);
    }
  }


}
