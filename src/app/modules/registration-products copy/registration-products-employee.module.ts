import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationProductsEmployeeRoutingModule } from './registration-products-employee-routing.module';
import { RegistrationEmployeeComponent } from './components/registration employee/registration-employee.component';
import { PageRegistrationEmployeeComponent } from './pages/page-registration/page-registration-employee.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RegistrationEmployeeComponent,
    PageRegistrationEmployeeComponent
  ],
  imports: [
    CommonModule,
    RegistrationProductsEmployeeRoutingModule,
    SharedModule
  ]
})
export class RegistrationProductsEmployeeModule { }
