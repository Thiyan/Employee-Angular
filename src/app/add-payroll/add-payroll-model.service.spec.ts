import { TestBed } from '@angular/core/testing';

import { AddPayrollModelService } from './add-payroll-model.service';

describe('AddPayrollModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddPayrollModelService = TestBed.get(AddPayrollModelService);
    expect(service).toBeTruthy();
  });
});
