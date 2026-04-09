import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelineTransformation } from './pipeline-transformation';

describe('PipelineTransformation', () => {
  let component: PipelineTransformation;
  let fixture: ComponentFixture<PipelineTransformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipelineTransformation],
    }).compileComponents();

    fixture = TestBed.createComponent(PipelineTransformation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
