import { Component } from '@angular/core';
import { Admin } from "../admin/admin";
import { User } from "../user/user";
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Icounter } from '../../State/Counter/counter.store';
import { decrement, increment, reset } from '../../State/Counter/counter.action';
import { CommonModule } from '@angular/common';
import { CustomeNgrx } from "../custome-ngrx/custome-ngrx";

@Component({
  selector: 'app-ngrx-practise',
  imports: [Admin, User, CommonModule, CustomeNgrx],
  templateUrl: './ngrx-practise.html',
  styleUrl: './ngrx-practise.css',
})
export class NgrxPractise {
  
  counter$: Observable<number>;

  constructor(private store: Store<Icounter>) {
    this.counter$ = this.store.select('counter');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }  
}
