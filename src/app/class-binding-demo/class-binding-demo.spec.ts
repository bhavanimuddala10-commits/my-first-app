import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassBindingDemo } from './class-binding-demo';

describe('ClassBindingDemo', () => {
  let component: ClassBindingDemo;
  let fixture: ComponentFixture<ClassBindingDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassBindingDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassBindingDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
