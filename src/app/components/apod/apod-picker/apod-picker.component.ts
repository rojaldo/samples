import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod-picker',
  templateUrl: './apod-picker.component.html',
  styleUrls: ['./apod-picker.component.scss']
})
export class ApodPickerComponent implements OnInit {

  @Output() OnSelectedDate = new EventEmitter<string>();

    // current date
    selectedDate: NgbDateStruct = {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate()
    };
    
  constructor() { }

  ngOnInit(): void {
  }

  pickDate(){
    const dateString = this.selectedDate.year + '-' + this.selectedDate.month + '-' + this.selectedDate.day;
    this.OnSelectedDate.emit(dateString);
  }

}
