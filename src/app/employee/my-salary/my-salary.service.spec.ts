import { TestBed } from '@angular/core/testing';

import { MySalaryService } from './my-salary.service';

describe('MySalaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MySalaryService = TestBed.get(MySalaryService);
    expect(service).toBeTruthy();
  });
});
