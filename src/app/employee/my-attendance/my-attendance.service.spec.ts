import { TestBed } from '@angular/core/testing';

import { MyAttendanceService } from './my-attendance.service';

describe('MyAttendanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyAttendanceService = TestBed.get(MyAttendanceService);
    expect(service).toBeTruthy();
  });
});
