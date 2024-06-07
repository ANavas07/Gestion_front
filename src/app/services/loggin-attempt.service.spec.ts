import { TestBed } from '@angular/core/testing';

import { LogginAttemptService } from './loggin-attempt.service';

describe('LogginAttemptService', () => {
  let service: LogginAttemptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogginAttemptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
