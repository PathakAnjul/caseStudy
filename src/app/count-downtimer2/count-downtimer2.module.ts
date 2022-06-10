import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountDownTimer2Component } from './count-down-timer2/count-down-timer2.component';
import { TimeFormatPipe } from './time-format.pipe';
import { ActionsComponent } from './actions/actions.component';
import { CountDownTimer2RoutingModule } from './count-downtimer2-routing.module';



@NgModule({
  declarations: [
    CountDownTimer2Component,
    TimeFormatPipe,
    ActionsComponent
  ],
  imports: [
    CommonModule,
    CountDownTimer2RoutingModule
  ]
})
export class CountDowntimer2Module { }
