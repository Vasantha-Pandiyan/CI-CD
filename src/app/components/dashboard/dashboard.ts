import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  router = inject(Router);

  logout() {
    localStorage.removeItem('token');
    alert('Logged out successfully');
    this.router.navigate(['/login']);
  }
}
