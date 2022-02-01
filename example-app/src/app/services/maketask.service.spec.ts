import { TestBed } from '@angular/core/testing';

import { MaketaskService } from './maketask.service';

describe('MaketaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaketaskService = TestBed.get(MaketaskService);
    expect(service).toBeTruthy();
  });
});
