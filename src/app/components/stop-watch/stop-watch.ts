import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-stop-watch',
  imports: [],
  templateUrl: './stop-watch.html',
  styleUrl: './stop-watch.css',
})
export class StopWatch {
  timer = signal(0);
  interval: any;

  start() {
    this.interval = setInterval(() => {
      this.timer.update((value) => value + 1);
    }, 1000);
    console.log(this.interval);    
  }  

  stop() {
    clearInterval(this.interval);
  }

  reset() {
    this.timer.set(0);
  }
}
