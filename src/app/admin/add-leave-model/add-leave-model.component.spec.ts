import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeaveModelComponent } from './add-leave-model.component';

describe('AddLeaveModelComponent', () => {
  let component: AddLeaveModelComponent;
  let fixture: ComponentFixture<AddLeaveModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLeaveModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLeaveModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
