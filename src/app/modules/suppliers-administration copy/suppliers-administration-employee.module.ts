import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersAdministrationEmployeeRoutingModule } from './suppliers-administration-employee-routing.module';
import { SuppliersEmployeeComponent } from './components/suppliers-employee/suppliers-employee.component';
import { PageSuppliersEmployeeComponent } from './pages/page-suppliers/page-suppliers-employee.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations:[
    SuppliersEmployeeComponent,
    PageSuppliersEmployeeComponent
  ],
  imports: [
    CommonModule,
    SuppliersAdministrationEmployeeRoutingModule,
    SharedModule
  ]
})
export class SuppliersAdministrationEmployeeModule { }
