import { TestBed } from '@angular/core/testing';

import { FoaasService } from './foaas.service';

describe('FoaasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoaasService = TestBed.get(FoaasService);
    expect(service).toBeTruthy();
  });
});
