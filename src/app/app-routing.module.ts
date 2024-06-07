import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './modules/auth/pages/page-login/page-login.component';
import { authGuard } from './utils/auth.guard';
import { adminGuard } from './utils/admin-guard.guard';
import { employeeGuard } from './utils/employee-guard.guard';

/*@routes: Defino el enrutamiento que va a tener mi webApp
canLoad[]: previene la carga de la ruta hasta que se cumpla una condicion
loadchildren: es lazyload*/
const routes: Routes = [
  //login management
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path:'login', component:PageLoginComponent},
  //{path:'panel', component:PageDashboardComponent},
  {path:'panel', loadChildren:() =>import('./modules/administration/administration.module').then((m) => m.AdministrationModule), canActivate:[authGuard, adminGuard]},
  {path:'panel-employee', loadChildren:() =>import('./modules/administration/administration-employee.module').then((m) => m.AdministrationEmployeeModule), canActivate:[authGuard, employeeGuard]},
  {path:'usuarios', loadChildren:() =>import('./modules/auth/auth.module').then((m)=>m.AuthModule), canActivate:[authGuard, adminGuard]},
  {path:'proveedores', loadChildren:() =>import('./modules/suppliers-administration/suppliers-administration.module').then((m)=>m.SuppliersAdministrationModule), canActivate:[authGuard, adminGuard]},
  {path:'proveedores-employee', loadChildren:() =>import('./modules/suppliers-administration copy/suppliers-administration-employee.module').then((m)=>m.SuppliersAdministrationEmployeeModule), canActivate:[authGuard, employeeGuard]},
  {path:'categorias', loadChildren:() =>import('./modules/categories-administration/categories-administration.module').then((m)=>m.CategoriesAdministrationModule), canActivate:[authGuard]},
  {path:'registro', loadChildren:() =>import('./modules/registration-products/registration-products.module').then((m)=>m.RegistrationProductsModule), canActivate:[authGuard, adminGuard]},
  {path:'registro-employee', loadChildren:() =>import('./modules/registration-products copy/registration-products-employee.module').then((m)=>m.RegistrationProductsEmployeeModule), canActivate:[authGuard, employeeGuard]},
  {path:'salida', loadChildren:() =>import('./modules/output-products/output-products.module').then((m)=>m.OutputProductsModule), canActivate:[authGuard]},
  {path:'salida-employee', loadChildren:() =>import('./modules/output-products copy/output-products-employee.module').then((m)=>m.OutputProductsEmployeeModule), canActivate:[authGuard, employeeGuard]},
  {path:'reportes', loadChildren:() =>import('./modules/reports/reports.module').then((m)=>m.ReportsModule), canActivate:[authGuard, adminGuard]},
  {path: '**', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
