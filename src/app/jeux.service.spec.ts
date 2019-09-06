import { TestBed } from '@angular/core/testing';

import { JeuxService } from './jeux.service';

describe('JeuxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JeuxService = TestBed.get(JeuxService);
    expect(service).toBeTruthy();
  });
});
