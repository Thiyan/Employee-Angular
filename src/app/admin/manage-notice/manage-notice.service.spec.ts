import { TestBed } from '@angular/core/testing';

import { ManageNoticeService } from './manage-notice.service';

describe('ManageNoticeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageNoticeService = TestBed.get(ManageNoticeService);
    expect(service).toBeTruthy();
  });
});
