import { TestBed } from '@angular/core/testing';

import { ApiCallsService } from './api-calls.service';

describe('ApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiCallsService = TestBed.get(ApiCallsService);
    expect(service).toBeTruthy();
  });
});
