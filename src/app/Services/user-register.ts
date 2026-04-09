import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../models/user/user-model';
import { Userlogin } from '../models/login-model';

@Injectable({
  providedIn: 'root',
})

export class UserRegister {
  private _registerUrl = 'http://localhost:3000';
  http = inject(HttpClient);

  registerUser(userData: User) {
    return this.http.post(`${this._registerUrl}/users`, userData);
  }

  loginUser(loginData: Userlogin) {
    return this.http.get<Userlogin[]>(`${this._registerUrl}/users`, {
      params: {
        username: loginData.username,
        password: loginData.password
      }
    });
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
