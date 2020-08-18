import { TestBed } from '@angular/core/testing';

import { userInformationService } from './user-information.service';

describe('userInformationService', () => {
  let service: userInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(userInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
