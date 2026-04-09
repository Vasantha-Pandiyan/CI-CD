import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudNgrx } from './crud-ngrx';

describe('CrudNgrx', () => {
  let component: CrudNgrx;
  let fixture: ComponentFixture<CrudNgrx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudNgrx],
    }).compileComponents();

    fixture = TestBed.createComponent(CrudNgrx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
