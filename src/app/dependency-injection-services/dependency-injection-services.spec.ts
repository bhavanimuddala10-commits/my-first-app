import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyInjectionServices } from './dependency-injection-services';

describe('DependencyInjectionServices', () => {
  let component: DependencyInjectionServices;
  let fixture: ComponentFixture<DependencyInjectionServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DependencyInjectionServices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependencyInjectionServices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
