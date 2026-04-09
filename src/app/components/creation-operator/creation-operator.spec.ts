import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationOperator } from './creation-operator';

describe('CreationOperator', () => {
  let component: CreationOperator;
  let fixture: ComponentFixture<CreationOperator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationOperator],
    }).compileComponents();

    fixture = TestBed.createComponent(CreationOperator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
