import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';

enum State {
  Init,
  FirstFigure,
  SecondFigure,
  Result
}

@Injectable()
export class CalculatorService {
  private display = '';
  private currentState = State.Init;
  private firstFigure = 0;
  private secondFigure = 0;
  private result = 0;
  private operator = '';
  // BehaviorSubject for display
  display$ = new BehaviorSubject<string>(this.display);

  constructor() {
    
  }

  get displayValue(): string {
    return this.display;
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

  process(value: number | string): string {
    console.log('CalculatorService.process() ' + value);
    
    if (typeof value === 'number') {
      this.handleNumber(value);
    } else if (typeof value === 'string') {
      this.handleSymbol(value);
    }
    
    return this.display;
  }

}
