import { TestBed } from '@angular/core/testing';

import { UiLibService } from './ui-lib.service';

describe('UiLibService', () => {
  let service: UiLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
