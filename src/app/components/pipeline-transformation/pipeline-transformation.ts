import { Component } from '@angular/core';
import { filter, first, from, map } from 'rxjs';

@Component({
  selector: 'app-pipeline-transformation',
  imports: [],
  templateUrl: './pipeline-transformation.html',
  styleUrl: './pipeline-transformation.css',
})
export class PipelineTransformation {

  users$ = from([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ]);

  usersTwo$ = from([
    { id: 1, name: 'vp', status: 'active'},
    { id: 2, name: 'mavendan', status: 'inactive'},
    { id: 3, name: 'krishnan', status: 'active'},
  ]);

  usersRole$ = from([
    { id: 1, name: 'vp', role: 'admin'},
    { id: 2, name: 'mavendan', role: 'user'},
    { id: 3, name: 'krishnan', role: 'admin'}
  ])

  ngOnInit() {
    this.users$.pipe(
      map(user => user.name.toUpperCase())
    ).subscribe(name => console.log(name));

    this.usersTwo$.pipe(
      filter(user => user.status === 'active'),
      map(user => user.name.toUpperCase())
    ).subscribe(name => console.log(name));

    this.usersRole$.pipe(
      first(user => user.role === 'admin'),
      map(user => user.name.toUpperCase())
    ).subscribe(name => console.log(name));
  }
}
