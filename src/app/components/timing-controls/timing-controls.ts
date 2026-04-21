import { Component } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-timing-controls',
  imports: [],
  templateUrl: './timing-controls.html',
  styleUrl: './timing-controls.css',
})
export class TimingControls {

  intervalObservable = interval(1000);
  interValue: any;

  countDown$ = interval(5000).pipe(take(5)); // Emits values 0 to 4 at 1-second intervals

  ngOnInit() {
    // // Example of using the interval operator
    // // This will emit a number every second
    // this.interValue = this.intervalObservable.subscribe(value => {
    //   console.log('Emitted value:', value);
    // });

    this.countDown$.subscribe(value => {
      console.log('Countdown value:', value);
      this.interValue = value; // Update the interValue with the emitted value
    });
  }

  ngOnDestroy() {
    // Clean up any subscriptions if necessary
    // this.interValue.unsubscribe(); // Unsubscribe when you want to stop receiving values
  }
}
