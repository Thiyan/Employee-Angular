import { AddRoleComponent } from './add-role/add-role.component';
import { ManageRoleComponent } from './manage-role/manage-role.component';
import { ManagePayrollComponent } from './manage-payroll/manage-payroll.component';
import { AddPayrollComponent } from './add-payroll/add-payroll.component';
import { ManageNoticeComponent } from './manage-notice/manage-notice.component';
import { AddNoticeComponent } from './add-notice/add-notice.component';
import { ManageLeaveComponent } from './manage-leave/manage-leave.component';
import { AddLeaveModelComponent } from './add-leave-model/add-leave-model.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {AdminHomeComponent} from '';
import { from } from 'rxjs';

const routes: Routes = [
  {path:"",component:AdminHomeComponent},
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
