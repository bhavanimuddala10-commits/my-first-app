import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectivesDemo } from './structural-directives-demo';

describe('StructuralDirectivesDemo', () => {
  let component: StructuralDirectivesDemo;
  let fixture: ComponentFixture<StructuralDirectivesDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirectivesDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirectivesDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
