import { TestBed } from '@angular/core/testing';

import { ManageEmployeeService } from './manage-employee.service';

describe('ManageEmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageEmployeeService = TestBed.get(ManageEmployeeService);
    expect(service).toBeTruthy();
  });
});
