import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxPractise } from './ngrx-practise';

describe('NgrxPractise', () => {
  let component: NgrxPractise;
  let fixture: ComponentFixture<NgrxPractise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxPractise],
    }).compileComponents();

    fixture = TestBed.createComponent(NgrxPractise);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
