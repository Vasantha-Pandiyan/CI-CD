import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HigherOrderMapping } from './higher-order-mapping';

describe('HigherOrderMapping', () => {
  let component: HigherOrderMapping;
  let fixture: ComponentFixture<HigherOrderMapping>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HigherOrderMapping],
    }).compileComponents();

    fixture = TestBed.createComponent(HigherOrderMapping);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
