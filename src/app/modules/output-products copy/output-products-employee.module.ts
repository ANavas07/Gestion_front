import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutputProductsRoutingModule } from './output-products-employee-routing.module';
import { OutputEmployeeComponent } from './components/output employee/output-employee.component';
import { PageOutputEmployeeComponent } from './pages/page-output/page-output-employee.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    OutputEmployeeComponent,
    PageOutputEmployeeComponent
  ],
  imports: [
    CommonModule,
    OutputProductsRoutingModule,
    SharedModule
  ]
})
export class OutputProductsEmployeeModule { }
