import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Userlogin } from '../../models/login-model';
import { Router } from '@angular/router';
import { UserRegister } from '../../Services/user-register';

@Component({
  selector: 'app-login',
  imports: [JsonPipe, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  router = inject(Router);
  LoginRegister = inject(UserRegister);

  loginObj: Userlogin = {
    username: '',
    password: ''
  }

  loginForm(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      this.LoginRegister.loginUser(this.loginObj).subscribe((res) => {
        console.log(res);
        if (res && res.length > 0) {
          localStorage.setItem('token', '12345');
          alert('Login successful');
          this.router.navigate(['/dashboard']);
        } else {
          alert('Invalid username or password');
        }
      });
      form.reset();
    }
  }

  newUser() {
    this.router.navigate(['/template-syntax']);
  }
}
