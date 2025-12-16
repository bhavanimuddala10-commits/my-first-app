import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRefDemo } from './template-ref-demo';

describe('TemplateRefDemo', () => {
  let component: TemplateRefDemo;
  let fixture: ComponentFixture<TemplateRefDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateRefDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateRefDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
