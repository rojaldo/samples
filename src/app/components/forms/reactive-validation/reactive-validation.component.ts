import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-validation',
  templateUrl: './reactive-validation.component.html',
  styleUrls: ['./reactive-validation.component.scss']
})
export class ReactiveValidationComponent implements OnInit {

  profileForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(15), Validators.pattern('^[a-zA-Z ]{3,15}$')]],
    power: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]{3,15}$')]],
    url: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  updateProfile() {
    this.profileForm.patchValue({
        firstName: 'Nancy',
        address: {
            street: '123 Drew Street'
        }
    });
}

onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
}


}
