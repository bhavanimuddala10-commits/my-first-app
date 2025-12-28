import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleBindingDemo } from './style-binding-demo';

describe('StyleBindingDemo', () => {
  let component: StyleBindingDemo;
  let fixture: ComponentFixture<StyleBindingDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleBindingDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleBindingDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
