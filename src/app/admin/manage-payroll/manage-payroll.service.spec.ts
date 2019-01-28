import { TestBed } from '@angular/core/testing';

import { ManagePayrollService } from './manage-payroll.service';

describe('ManagePayrollService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagePayrollService = TestBed.get(ManagePayrollService);
    expect(service).toBeTruthy();
  });
});
