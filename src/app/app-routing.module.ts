import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './modules/auth/pages/page-login/page-login.component';
import { authGuard } from './utils/auth.guard';

/*@routes: Defino el enrutamiento que va a tener mi webApp
canLoad[]: previene la carga de la ruta hasta que se cumpla una condicion
loadchildren: es lazyload*/
const routes: Routes = [
  //login management
  // {path: '**', redirectTo: 'login', pathMatch: 'full'},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  // {path:'', component:PageLoginComponent},
  {path:'login', component:PageLoginComponent},
  //{path:'panel', component:PageDashboardComponent},
  {path:'panel', loadChildren:() =>import('./modules/administration/administration.module').then((m) => m.AdministrationModule), canActivate:[authGuard]},
  {path:'panel-employee', loadChildren:() =>import('./modules/administration/administration-employee.module').then((m) => m.AdministrationEmployeeModule), canActivate:[authGuard]},
  {path:'usuarios', loadChildren:() =>import('./modules/auth/auth.module').then((m)=>m.AuthModule), canActivate:[authGuard]},
  {path:'proveedores', loadChildren:() =>import('./modules/suppliers-administration/suppliers-administration.module').then((m)=>m.SuppliersAdministrationModule), canActivate:[authGuard]},
  {path:'proveedores-employee', loadChildren:() =>import('./modules/suppliers-administration copy/suppliers-administration-employee.module').then((m)=>m.SuppliersAdministrationEmployeeModule), canActivate:[authGuard]},
  {path:'categorias', loadChildren:() =>import('./modules/categories-administration/categories-administration.module').then((m)=>m.CategoriesAdministrationModule), canActivate:[authGuard]},
  {path:'registro', loadChildren:() =>import('./modules/registration-products/registration-products.module').then((m)=>m.RegistrationProductsModule), canActivate:[authGuard]},
  {path:'registro-employee', loadChildren:() =>import('./modules/registration-products copy/registration-products-employee.module').then((m)=>m.RegistrationProductsEmployeeModule), canActivate:[authGuard]},
  {path:'salida', loadChildren:() =>import('./modules/output-products/output-products.module').then((m)=>m.OutputProductsModule), canActivate:[authGuard]},
  {path:'salida-employee', loadChildren:() =>import('./modules/output-products copy/output-products-employee.module').then((m)=>m.OutputProductsEmployeeModule), canActivate:[authGuard]},
  {path:'reportes', loadChildren:() =>import('./modules/reports/reports.module').then((m)=>m.ReportsModule), canActivate:[authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
