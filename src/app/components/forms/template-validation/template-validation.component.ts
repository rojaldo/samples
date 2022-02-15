import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';

@Component({
  selector: 'app-template-validation',
  templateUrl: './template-validation.component.html',
  styleUrls: ['./template-validation.component.scss']
})
export class TemplateValidationComponent implements OnInit {

  pokemon: Pokemon = new Pokemon('','');

  namePattern = /^[a-zA-Z ]{3,15}$/;
  
  constructor() { }
  ngOnInit() {
  }
  submitForm(form: any): void {
      console.log('Form Data: ');
      console.log(form);
      // regex min 3 characters max 15 characters, and only letters and space
      
  }

  getClass(valid: any) {
    return !valid ? 'btn btn-secondary' : 'btn btn-primary';
  }

}
