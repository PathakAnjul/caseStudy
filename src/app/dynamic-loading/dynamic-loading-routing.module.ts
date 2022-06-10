import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicLoadingComponent } from './dynamic-loading/dynamic-loading.component';


const routes: Routes = [
  {
    path: '',
    component: DynamicLoadingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicLoadingRoutingModule { }