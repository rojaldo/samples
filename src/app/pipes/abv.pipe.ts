import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abv'
})
export class AbvPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let symbol = '%';
    if(args.length > 0) {
      symbol = ''+ args[0];
    }
    if(typeof value === 'number' && (value >= 0 && value <= 60) ){
      return value + symbol;
    }else {
      console.error('Value is not a valid number: ' + value);
      return value;
    }
  }

}
