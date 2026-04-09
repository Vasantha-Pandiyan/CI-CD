import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Icounter } from '../../State/Counter/counter.store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})

export class User {

  counter$: Observable<number>;

  constructor(private store: Store<Icounter>) {
    this.counter$ = this.store.select('counter');
  }
}
