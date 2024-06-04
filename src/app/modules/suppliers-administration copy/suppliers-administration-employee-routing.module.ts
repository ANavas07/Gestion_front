import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageSuppliersEmployeeComponent } from './pages/page-suppliers/page-suppliers-employee.component';

const routes: Routes = [
  {path:"", component:PageSuppliersEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliersAdministrationEmployeeRoutingModule { }
