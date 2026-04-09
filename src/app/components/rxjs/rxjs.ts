import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-rxjs',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './rxjs.html',
  styleUrl: './rxjs.css',
})
export class Rxjs {

  rxjsOperators = signal<{name: string, code: string}[]>([
    {name: 'Creation Operators', code: 'cop'},
    {name: 'Pipeline and Transformation Operators', code: 'ptop'},
    {name: 'Timing and Controls', code: 'tcop'},
    {name: 'Combination Operators', code: 'coop'},
    {name: 'Higher-Order Mapping', code: 'homm'},
    {name: 'Error Handling Operators', code: 'ehop'}
  ]);
}
