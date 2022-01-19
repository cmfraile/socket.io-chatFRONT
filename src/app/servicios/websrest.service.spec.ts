import { TestBed } from '@angular/core/testing';

import { WebsrestService } from './websrest.service';

describe('WebsrestService', () => {
  let service: WebsrestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsrestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
