import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFrom } from './template-driven-from';

describe('TemplateDrivenFrom', () => {
  let component: TemplateDrivenFrom;
  let fixture: ComponentFixture<TemplateDrivenFrom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDrivenFrom],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenFrom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
