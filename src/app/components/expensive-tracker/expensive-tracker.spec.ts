import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensiveTracker } from './expensive-tracker';

describe('ExpensiveTracker', () => {
  let component: ExpensiveTracker;
  let fixture: ComponentFixture<ExpensiveTracker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpensiveTracker],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpensiveTracker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
