import { TestBed } from '@angular/core/testing';

import { ResponseCountriesService } from './response-countries.service';

describe('ResponseCountriesService', () => {
  let service: ResponseCountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponseCountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
