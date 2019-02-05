import { ReplyComponent } from './employee/reply/reply.component';
import { MyTaskComponent } from './employee/my-task/my-task.component';
import { AddTaskComponent } from './employee/add-task/add-task.component';
import { SideBarComponent } from './admin/side-bar/side-bar.component';
import { EmployeeNavBarComponent } from './employee/employee-nav-bar/employee-nav-bar.component';
import { LeaveRequestComponent } from './employee/leave-request/leave-request.component';
import { MyAttendanceComponent } from './employee/my-attendance/my-attendance.component';
import { MySalaryComponent } from './employee/my-salary/my-salary.component';
import { ManageRoleComponent } from './admin/manage-role/manage-role.component';
import { AddRoleComponent } from './admin/add-role/add-role.component';
import { ManagePayrollComponent } from './admin/manage-payroll/manage-payroll.component';
import { AddPayrollComponent } from './admin/add-payroll/add-payroll.component';
import { ManageNoticeComponent } from './admin/manage-notice/manage-notice.component';
import { AddNoticeComponent } from './admin/add-notice/add-notice.component';
import { ManageLeaveComponent } from './admin/manage-leave/manage-leave.component';
import { AddLeaveModelComponent } from './admin/add-leave-model/add-leave-model.component';
import { ManageEmployeeComponent } from './admin/manage-employee/manage-employee.component';
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AddAttendanceComponent } from './employee/add-attendance/add-attendance.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {AdminHomeComponent} from '';
import { from } from 'rxjs';

const routes: Routes = [
  {path:"",component:AdminHomeComponent,},
  {path:"add-attendance",component:AddAttendanceComponent},
  {path:"my-salary",component:MySalaryComponent},
  {path:"my-attendance",component:MyAttendanceComponent},
  {path:"leave-request",component:LeaveRequestComponent},
  {path:"add-task",component:AddTaskComponent}, 
  {path:"my-task",component:MyTaskComponent},
  {path:"leave-request",component:LeaveRequestComponent},
  {path:"reply",component:ReplyComponent},
  // {path:"admin",component:SideBarComponent},
  {path:"new-employee",component:AddEmployeeComponent},
  {path:"employees",component:ManageEmployeeComponent},
  {path:"new-leave-model",component:AddLeaveModelComponent},
  {path:"leave-models",component:ManageLeaveComponent},
  {path:"new-notice",component:AddNoticeComponent},
  {path:"notices",component:ManageNoticeComponent},
  {path:"new-payroll",component:AddPayrollComponent},
  {path:"payrolls",component:ManagePayrollComponent},
  {path:"new-role",component:AddRoleComponent},
  {path:"roles",component:ManageRoleComponent},
  {path:"**",component:AdminHomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
