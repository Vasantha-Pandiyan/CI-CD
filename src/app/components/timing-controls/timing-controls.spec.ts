import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimingControls } from './timing-controls';

describe('TimingControls', () => {
  let component: TimingControls;
  let fixture: ComponentFixture<TimingControls>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimingControls],
    }).compileComponents();

    fixture = TestBed.createComponent(TimingControls);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
