import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzApp } from './quizz-app';

describe('QuizzApp', () => {
  let component: QuizzApp;
  let fixture: ComponentFixture<QuizzApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizzApp],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizzApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
