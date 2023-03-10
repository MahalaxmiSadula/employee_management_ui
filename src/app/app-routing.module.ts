import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const routes: Routes = [
  { path:"view-employee/:id", component: ViewEmployeeComponent},
  { path:"update-employee/:id", component: UpdateEmployeeComponent},
  { path:"create-employee", component: CreateEmployeeComponent},
  { path:"employees", component: EmployeeListComponent},
  { path: "", redirectTo: "employees", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
