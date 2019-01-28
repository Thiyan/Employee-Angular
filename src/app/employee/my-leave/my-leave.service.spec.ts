import { TestBed } from '@angular/core/testing';

import { MyLeaveService } from './my-leave.service';

describe('MyLeaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyLeaveService = TestBed.get(MyLeaveService);
    expect(service).toBeTruthy();
  });
});
