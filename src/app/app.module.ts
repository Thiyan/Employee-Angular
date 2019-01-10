import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddLeaveModelComponent } from './add-leave-model/add-leave-model.component';
import { AddNoticeComponent } from './add-notice/add-notice.component';
import { ManagePayrollComponent } from './manage-payroll/manage-payroll.component';
import { ManageNoticeComponent } from './manage-notice/manage-notice.component';
import { ManageLeaveComponent } from './manage-leave/manage-leave.component';
import { ManageRoleComponent } from './manage-role/manage-role.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddPayrollComponent } from './add-payroll/add-payroll.component';
import {FormsModule} from '@angular/forms'
import { from } from 'rxjs';
import { HttpClientModule} from '@angular/common/http';
import { NgxSpinnerModule} from 'ngx-spinner';


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
    AddPayrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
