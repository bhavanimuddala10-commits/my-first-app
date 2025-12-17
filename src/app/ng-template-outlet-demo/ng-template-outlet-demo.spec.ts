import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateOutletDemo } from './ng-template-outlet-demo';

describe('NgTemplateOutletDemo', () => {
  let component: NgTemplateOutletDemo;
  let fixture: ComponentFixture<NgTemplateOutletDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgTemplateOutletDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTemplateOutletDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
