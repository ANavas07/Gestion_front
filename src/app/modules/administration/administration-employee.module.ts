import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationEmployeeRoutingModule } from './administration-employee-routing.module';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    PageDashboardComponent
  ],
  imports: [
    CommonModule,
    AdministrationEmployeeRoutingModule,
    SharedModule
  ]
})
export class AdministrationEmployeeModule { }
