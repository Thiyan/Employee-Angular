import { TestBed } from '@angular/core/testing';

import { AddLeaveModelService } from './add-leave-model.service';

describe('AddLeaveModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddLeaveModelService = TestBed.get(AddLeaveModelService);
    expect(service).toBeTruthy();
  });
});
