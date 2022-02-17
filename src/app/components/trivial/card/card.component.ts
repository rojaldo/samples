import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/model/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card!: Card;
  @Output() onAnswer = new EventEmitter<boolean>();

  classes: string[] = [
    'btn btn-primary btn-lg btn-block',   
    'btn btn-primary btn-lg btn-block', 
    'btn btn-primary btn-lg btn-block', 
    'btn btn-primary btn-lg btn-block'];

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(answer: string) {
    this.card.responded = true;
    this.card.sendResponse(answer);
    this.onAnswer.emit(this.card.rightResponded);
    for (let i = 0; i < this.classes.length; i++) {
      this.classes[i] = this.getClass(this.card.answers[i]);
    }
  }

  getClass(answer: string) {
    console.log('getClass()');
    if (!this.card.responded) {
      return 'btn btn-primary btn-lg btn-block';
    }
    else {
      if (this.card.userAnswer === answer && !this.card.rightResponded) {
        return 'btn btn-danger btn-lg btn-block';
      } else if (this.card.rightAnswer === answer) {
        return 'btn btn-success btn-lg btn-block';
      }
      return 'btn btn-secondary btn-lg btn-block';
    }
  }

}
