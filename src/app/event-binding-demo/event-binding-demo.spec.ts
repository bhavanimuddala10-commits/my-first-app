import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindingDemo } from './event-binding-demo';

describe('EventBindingDemo', () => {
  let component: EventBindingDemo;
  let fixture: ComponentFixture<EventBindingDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventBindingDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBindingDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
