import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'fromDate'
})
export class FromDatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(typeof value === 'string'){
      // check if string format is mm/yyyy
      if(value.length === 7){
        let month = value.substring(0,2);
        // check that month is a number
        if(isNaN(Number(month))){
          console.error('Value is not a valid month: ' + value);
          return value;
        }
        let year = value.substring(3,6);
        // check that year is a number
        if(isNaN(Number(year))){
          console.error('Value is not a valid year: ' + value);
          return value;
        }

        return moment(value, "MM/YYYY").fromNow();
      }
    }
    console.error('Value is not a valid date: ' + value);
    return value;
  }

}
