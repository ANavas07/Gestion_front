import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewsRoutingModule } from './views-routing.module';
import { HttpClientModule } from '@angular/common/http';


//traduccion
export function HttpLoaderFactory(){
}

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule,
    HttpClientModule,
  ]
})
export class ViewsModule { }