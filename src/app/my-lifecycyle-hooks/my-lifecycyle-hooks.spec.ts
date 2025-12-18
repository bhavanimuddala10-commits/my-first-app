import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLifecycyleHooks } from './my-lifecycyle-hooks';

describe('MyLifecycyleHooks', () => {
  let component: MyLifecycyleHooks;
  let fixture: ComponentFixture<MyLifecycyleHooks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyLifecycyleHooks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLifecycyleHooks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
