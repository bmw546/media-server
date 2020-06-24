import { TestBed } from '@angular/core/testing';

import { HttpFactoryService } from './http-factory.service';

describe('HttpFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpFactoryService = TestBed.get(HttpFactoryService);
    expect(service).toBeTruthy();
  });
});
