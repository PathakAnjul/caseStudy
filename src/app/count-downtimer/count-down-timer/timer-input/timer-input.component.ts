import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Timer } from '../../timer';
import { KeyValuePipe } from '@angular/common'

@Component({
  selector: 'app-timer-input',
  templateUrl: './timer-input.component.html',
  styleUrls: ['./timer-input.component.css']
})
export class TimerInputComponent implements OnInit {

  timerInputForm: FormGroup;
  defaultInputs: Timer = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds:0
  } 


  @Output() timerValue = new EventEmitter<Timer | string>();
  @Input() isTimerRunning: boolean = false;

  constructor() { }

  ngOnInit(): void {

    this.timerInputForm = new FormGroup({
      days: new FormControl(this.defaultInputs.days,[Validators.min(0)]),
      hours: new FormControl(this.defaultInputs.hours, [Validators.min(0),Validators.max(24)]),
      minutes: new FormControl(this.defaultInputs.minutes, [Validators.min(0),Validators.max(60)]),
      seconds: new FormControl(this.defaultInputs.seconds, [Validators.min(0),Validators.max(60)])
    })
  }

  startOrPauseTimer(timerInput: Timer) {
    console.log(this.timerInputForm)
  let timerValueAllNull = Object.values(timerInput).every((value => value <= 0));

  if(!timerValueAllNull) {
    this.timerValue.emit(timerInput);
  }
  }

  onReset(timerInput: Timer){
    let timerValueAllNull = Object.values(timerInput).every((value => value <= 0));
    if(!timerValueAllNull) {
      this.timerValue.emit('Reset');
    }
  }
  
  
  resetInput() {
    this.timerInputForm.reset(this.defaultInputs);
  }

}
