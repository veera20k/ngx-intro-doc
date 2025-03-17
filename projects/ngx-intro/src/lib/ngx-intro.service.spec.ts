import { TestBed } from '@angular/core/testing';

import { NgxIntroService } from './ngx-intro.service';

describe('NgxIntroService', () => {
  let service: NgxIntroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxIntroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
