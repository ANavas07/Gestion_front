import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageRegistrationEmployeeComponent } from './pages/page-registration/page-registration-employee.component';

const routes: Routes = [
  {path:'', component:PageRegistrationEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationProductsEmployeeRoutingModule { }
