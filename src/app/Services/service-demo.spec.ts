import { TestBed } from '@angular/core/testing';

import { ServiceDemo } from './service-demo';

describe('ServiceDemo', () => {
  let service: ServiceDemo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDemo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
