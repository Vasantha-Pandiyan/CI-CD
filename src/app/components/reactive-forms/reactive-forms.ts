import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.css',
})
export class ReactiveForms {

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)
    ]),
  });

  onSubmit() {
    console.log(this.myForm.value);
    this.myForm.reset();
  }

  assignValue() {
    this.myForm.setValue({
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '1234567890'
    });
  }
}  
