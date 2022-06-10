import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicLoadingComponent } from './dynamic-loading/dynamic-loading.component';
import { DynamicLoadingRoutingModule } from './dynamic-loading-routing.module';



@NgModule({
  declarations: [
    DynamicLoadingComponent
  ],
  imports: [
    CommonModule,
    DynamicLoadingRoutingModule
  ]
})
export class DynamicLoadingModule { }
