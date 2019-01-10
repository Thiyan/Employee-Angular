import { TestBed } from '@angular/core/testing';

import { ManageLeaveService } from './manage-leave.service';

describe('ManageLeaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageLeaveService = TestBed.get(ManageLeaveService);
    expect(service).toBeTruthy();
  });
});
