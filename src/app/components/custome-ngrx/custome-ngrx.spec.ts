import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeNgrx } from './custome-ngrx';

describe('CustomeNgrx', () => {
  let component: CustomeNgrx;
  let fixture: ComponentFixture<CustomeNgrx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomeNgrx],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomeNgrx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
