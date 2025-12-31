import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudHttpDemo } from './crud-http-demo';

describe('CrudHttpDemo', () => {
  let component: CrudHttpDemo;
  let fixture: ComponentFixture<CrudHttpDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudHttpDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudHttpDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
