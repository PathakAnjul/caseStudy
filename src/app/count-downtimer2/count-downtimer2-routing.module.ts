import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountDownTimer2Component } from './count-down-timer2/count-down-timer2.component';


const routes: Routes = [
  {
    path: '',
    component: CountDownTimer2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountDownTimer2RoutingModule { }