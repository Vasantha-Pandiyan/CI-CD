import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [CommonModule],
  templateUrl: './life-cycle.html',
  styleUrl: './life-cycle.css',
})
export class LifeCycle implements OnInit, OnDestroy, OnChanges, AfterViewInit {


  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

}