import { Component } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-creation-operator',
  imports: [],
  templateUrl: './creation-operator.html',
  styleUrl: './creation-operator.css',
})
export class CreationOperator {

  // of example
  frameworks$ = of('Angular', 'React', 'Vue');
  users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];


  ngOnInit() {
    this.frameworks$.subscribe({
      next: value => console.log(value),
      complete: () => console.log('Completed emitting frameworks')
    });
    const users$ = from(this.users); // This is just an array, not an observable. You can use it directly in the template or convert it to an observable if needed.
    users$.subscribe({
      next: value => console.log(value.name),
      complete: () => console.log('Completed emitting users')
    });
  }

  

}
