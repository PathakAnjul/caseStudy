import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Timer } from '../../timer';

@Component({
  selector: 'app-timer-display',
  templateUrl: './timer-display.component.html',
  styleUrls: ['./timer-display.component.css']
})
export class TimerDisplayComponent implements OnInit {

  currentTimerInMiliseconds: number;
  timerInstance;
  timeRemaining: Timer = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0

  };

  @Output() timerComplete = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  startorPauseTimer(action: string, timerValue? ) {

    if(action === 'START') {
      this.currentTimerInMiliseconds = (timerValue.days * 24 * 60 * 60 * 1000) +
                                    (timerValue.hours * 60 * 60 * 1000) +
                                    (timerValue.minutes * 60 * 1000) +
                                    (timerValue.seconds * 1000)
    this.timeRemaining = timerValue;
    this.timerInstance = setInterval(() => {
      let currentValue = this.currentTimerInMiliseconds - 1000;

      this.timeRemaining.days = Math.floor((currentValue) / (1000 * 60 * 60 * 24));
      this.timeRemaining.hours = Math.floor((currentValue % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.timeRemaining.minutes = Math.floor((currentValue % (1000 * 60 * 60)) / (1000 * 60));
      this.timeRemaining.seconds = Math.floor((currentValue % (1000 * 60)) / 1000);

      this.currentTimerInMiliseconds = currentValue;

      if(currentValue == 0) {
        clearInterval(this.timerInstance);
        this.timerComplete.emit(true);
      }
    }, 1000)
    }

    else if(action === 'PAUSE') {
      clearInterval(this.timerInstance);
      this.timerComplete.emit(false);
    }
  }

  resetDisplay() {
    clearInterval(this.timerInstance);
    this.timeRemaining = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
  
    }
  }

}
