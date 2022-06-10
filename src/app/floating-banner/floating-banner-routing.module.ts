import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FloatingBannerComponent } from './floating-banner.component';


const routes: Routes = [
  {
    path: '',
    component: FloatingBannerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FloatingBannerRoutingModule { }