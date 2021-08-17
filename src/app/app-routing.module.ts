import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { DeductionComponent } from './deduction/deduction.component';
import { IncomeComponent } from './income/income.component';
const routes: Routes = [
  {
    path: "employees",
    component: EmployeesComponent,
  },
  {
    path: "deduction",
    component: DeductionComponent,
  },
  {
    path: "income",
    component: IncomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
