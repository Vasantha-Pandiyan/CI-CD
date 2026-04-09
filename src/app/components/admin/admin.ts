import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Icounter } from '../../State/Counter/counter.store';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  imports: [CommonModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {

  counter$: Observable<number>;

  constructor(private store: Store<Icounter>) {
    this.counter$ = this.store.select('counter');
  }
}
