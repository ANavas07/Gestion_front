import { TestBed } from '@angular/core/testing';

import { AsideEmployeeMenuService } from './aside-employee-menu.service';

describe('AsideEmployeeMenuService', () => {
  let service: AsideEmployeeMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsideEmployeeMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
