import { Component, OnInit, ViewChild } from '@angular/core';
import { Timer } from '../timer';
import { TimerDisplayComponent } from './timer-display/timer-display.component';
import { TimerInputComponent } from './timer-input/timer-input.component';

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.css']
})
export class CountDownTimerComponent implements OnInit {

  isTimerRunning: boolean = false;
  actionButtonClicked: string;

  @ViewChild(TimerDisplayComponent, {static: false}) timerDisplay: TimerDisplayComponent;
  @ViewChild(TimerInputComponent, {static: false}) timerInput: TimerInputComponent;
  constructor() { }

  ngOnInit(): void {
  }

  onTimerComplete(e: boolean) {
      if(e === true) {
        window.alert('Timer Complete');
        this.resetTimer();
        this.actionButtonClicked = 'COMPLETED'
      }
  }
  
  onTimerValue(timerValue) {
    if ( timerValue == 'Reset') {
      this.resetTimer();
      this.actionButtonClicked = 'RESET'
    } else if(!this.isTimerRunning) {
      this.startTimer(timerValue);
      this.isTimerRunning = true;
      this.actionButtonClicked = 'STARTED'
    } else {
      this.pauseTimer();
      this.isTimerRunning = false;
      this.actionButtonClicked = 'PAUSED'
    }
  }

  resetTimer() {
    this.isTimerRunning = false;
    this.timerInput.resetInput();
    this.timerDisplay.resetDisplay();
    
  };

  startTimer(timerValue) {
    this.timerDisplay.startorPauseTimer('START',timerValue);
  };

  pauseTimer() {
    this.timerDisplay.startorPauseTimer('PAUSE');
  };

}
