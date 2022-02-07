import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  display = 'samples';

  handleClick(value: number) {
    this.display = '' + value;
  }  
}
