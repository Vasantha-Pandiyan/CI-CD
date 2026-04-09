import { JsonPipe } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/user/user-model';
import { UserRegister } from '../../Services/user-register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-driven-from',
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-driven-from.html',
  styleUrl: './template-driven-from.css',
})
export class TemplateDrivenFrom {

  userRegister = inject(UserRegister);
  router = inject(Router);

  userObj: User = {
    username: '',
    password: '',
    email: '',
    gender: ''
  }

    onSubmit(form: NgForm) {
    if(form.valid) {
      console.log(form.value);
      this.userRegister.registerUser(form.value).subscribe((response) => {
        console.log(response);
        alert('User registered successfully!');
      });
    }
    form.reset();
  }

  alreadyRegister() {
    this.router.navigate(['/login']);
  }

}
