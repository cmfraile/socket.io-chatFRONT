import { TestBed } from '@angular/core/testing';

import { MenuserService } from './menuser.service';

describe('MenuserService', () => {
  let service: MenuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
