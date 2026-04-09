import { Component } from '@angular/core';

@Component({
  selector: 'app-expensive-tracker',
  imports: [],
  templateUrl: './expensive-tracker.html',
  styleUrl: './expensive-tracker.css',
})
export class ExpensiveTracker {
  
  addExpense() {
    console.log('Adding expense...');
  }

  addIncome() {
    console.log('Adding income...');
  }

  addTransaction() {
    console.log('Adding transaction...');
  }
}
