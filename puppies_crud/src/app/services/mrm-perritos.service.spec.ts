import { TestBed } from '@angular/core/testing';

import { MRMPerritosService } from './mrm-perritos.service';

describe('MRMPerritosService', () => {
  let service: MRMPerritosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MRMPerritosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
