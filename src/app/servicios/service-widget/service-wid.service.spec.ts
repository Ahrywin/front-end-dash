import { TestBed } from '@angular/core/testing';

import { ServiceWidService } from './service-wid.service';

describe('ServiceWidService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceWidService = TestBed.get(ServiceWidService);
    expect(service).toBeTruthy();
  });
});
