import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeVsPropertyDemo } from './attribute-vs-property-demo';

describe('AttributeVsPropertyDemo', () => {
  let component: AttributeVsPropertyDemo;
  let fixture: ComponentFixture<AttributeVsPropertyDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributeVsPropertyDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeVsPropertyDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
