import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimerInputComponent } from './count-down-timer/timer-input/timer-input.component';
import { TimerDisplayComponent } from './count-down-timer/timer-display/timer-display.component';
import { TimeStampLoggerComponent } from './count-down-timer/time-stamp-logger/time-stamp-logger.component';
import { ClickLoggerComponent } from './count-down-timer/click-logger/click-logger.component';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';
import { CountDownTimerRoutingModule } from './count-downtimer-routing.module';



@NgModule({
  declarations: [
    TimerInputComponent,
    TimerDisplayComponent,
    TimeStampLoggerComponent,
    ClickLoggerComponent,
    CountDownTimerComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CountDownTimerRoutingModule

  ]
})
export class CountDowntimerModule { }
