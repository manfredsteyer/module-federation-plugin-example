import { TestBed } from '@angular/core/testing';

import { AuthLibService } from './auth-lib.service';

describe('AuthLibService', () => {
  let service: AuthLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
