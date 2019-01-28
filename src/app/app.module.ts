import { AddPayrollComponent } from './admin/add-payroll/add-payroll.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ManageEmployeeComponent } from './admin/manage-employee/manage-employee.component';
import { AddRoleComponent } from './admin/add-role/add-role.component';
import { ManageRoleComponent } from './admin/manage-role/manage-role.component';
import { ManageLeaveComponent } from './admin/manage-leave/manage-leave.component';
import { ManageNoticeComponent } from './admin/manage-notice/manage-notice.component';
import { ManagePayrollComponent } from './admin/manage-payroll/manage-payroll.component';
import { AddNoticeComponent } from './admin/add-notice/add-notice.component';
import { AddLeaveModelComponent } from './admin/add-leave-model/add-leave-model.component';
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { SideBarComponent } from './admin/side-bar/side-bar.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms'
import { from } from 'rxjs';
import { HttpClientModule} from '@angular/common/http';
import { NgxSpinnerModule} from 'ngx-spinner';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from './dialog/dialog.component';
import { AddAttendanceComponent } from './employee/add-attendance/add-attendance.component';
import { MySalaryComponent } from './employee/my-salary/my-salary.component';
import { MyAttendanceComponent } from './employee/my-attendance/my-attendance.component';
import { MyLeaveComponent } from './employee/my-leave/my-leave.component';
import { LeaveRequestComponent } from './employee/leave-request/leave-request.component';
import { AddTaskComponent } from './employee/add-task/add-task.component';



@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    AddEmployeeComponent,
    AddLeaveModelComponent,
    AddNoticeComponent,
    ManagePayrollComponent,
    ManageNoticeComponent,
    ManageLeaveComponent,
    ManageRoleComponent,
    AddRoleComponent,
    ManageEmployeeComponent,
    AdminHomeComponent,
    AddPayrollComponent,
    ConfirmationDialogComponent,
    DialogComponent,
    AddAttendanceComponent,
    MySalaryComponent,
    MyAttendanceComponent,
    MyLeaveComponent,
    LeaveRequestComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    NgbModule.forRoot(),
   
  ],
  providers: [ConfirmationDialogService,NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents: [ DialogComponent ],
})
export class AppModule { }
