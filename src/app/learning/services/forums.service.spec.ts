import { TestBed } from '@angular/core/testing';

import { ForumsService } from './forums.service';

describe('StudentsService', () => {
  let service: ForumsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForumsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
