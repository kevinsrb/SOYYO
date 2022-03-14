import { TestBed, inject } from '@angular/core/testing';

import { Business_infoService } from './business_info.service';

describe('Business_infoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Business_infoService]
    });
  });

  it('should be created', inject([Business_infoService], (service: Business_infoService) => {
    expect(service).toBeTruthy();
  }));
});
