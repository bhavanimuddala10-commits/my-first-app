import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NullSafeDemo } from './null-safe-demo';

describe('NullSafeDemo', () => {
  let component: NullSafeDemo;
  let fixture: ComponentFixture<NullSafeDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NullSafeDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NullSafeDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
