import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOutputEmployeeComponent } from './pages/page-output/page-output-employee.component';

const routes: Routes = [
  {path:'', component:PageOutputEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutputProductsRoutingModule { }
