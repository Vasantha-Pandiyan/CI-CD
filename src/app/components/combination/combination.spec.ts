import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Combination } from './combination';

describe('Combination', () => {
  let component: Combination;
  let fixture: ComponentFixture<Combination>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Combination],
    }).compileComponents();

    fixture = TestBed.createComponent(Combination);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
