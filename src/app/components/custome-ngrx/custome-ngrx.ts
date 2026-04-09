import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Icounter } from '../../State/Counter/counter.store';
import { addCustomCounter, removeCustomCounter } from '../../State/Counter/counter.action';

@Component({
  selector: 'app-custome-ngrx',
  imports: [FormsModule],
  templateUrl: './custome-ngrx.html',
  styleUrl: './custome-ngrx.css',
})
export class CustomeNgrx {
  number!: number;
  removeNumber!: number;
 
  constructor(private store: Store<Icounter>) {}

  customCounter() {
   this.store.dispatch(addCustomCounter({addValue: +this.number}));
   this.number = 0;
  }

  removeCounter() {
    this.store.dispatch(removeCustomCounter({removeValue: +this.removeNumber}));
    this.removeNumber = 0;
   }
}
