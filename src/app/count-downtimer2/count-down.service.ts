import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Timer } from '../count-downtimer2/timer2';

@Injectable({
  providedIn: 'root'
})
export class CountDownService {

  clickLog = new BehaviorSubject({
    started: 0,
    paused: 0
  }); 

  counter = new BehaviorSubject<Timer>({
    seconds: 0,
    minutes: 0,
    hours: 0,
    totalTime: 0
  }); 

  public Counter$ = this.counter.asObservable();
  public ClickLogger$ = this.clickLog.asObservable();

  private intervalState = new BehaviorSubject({
    min: 0,
    max: 0
  });

  public intervalObs$ = this.intervalState.asObservable();

  constructor() { }

  getSeconds() {
    return this.counter.value.seconds;
  }

  getMinutes() {
    return this.counter.value.minutes;
  }

  getHours() {
    return this.counter.value.hours;
  }

  getTotalSeconds() {
    return this.counter.value.totalTime;
  }


  getMin() {
    return this.intervalState.value.min;
  }

  getMax() {
    return this.intervalState.value.max;
  }

  getStartClicks(){
    return this.clickLog.value.started;
  }

  getPauseClicks(){
    return this.clickLog.value.paused;
  }

  calculateSeconds(update) {
    let timer = this.counter.value.totalTime
    timer = update.seconds
    timer += update.minutes * 60;
    timer += (update.hours * 60) * 60;
    return timer;
  }

  updateCounter(value, action) {
    let valToNumber = parseInt(value);
  if (valToNumber < 0) valToNumber = 0;
  let update = this.counter.value;
  if (action === 'seconds') update.seconds = valToNumber;
  if (action === 'minutes') update.minutes = valToNumber;
  if (action === 'hours') update.hours = valToNumber;
  this.counter.value.totalTime = this.calculateSeconds(update);
  this.counter.next(update);
  }

  updateIntervalState(value, command) {
    let valToNumber = parseInt(value);
    if (valToNumber < 0) valToNumber = 0;
    let update = this.intervalState.value;
    if (command === 'min') update.min = valToNumber;
    if (command === 'max') update.max = valToNumber;
    this.intervalState.next(update);
  }

  updateClickLogger(value,command){
    let update = this.clickLog.value;
    if(command === 'started') update.started = parseInt(value);
    if(command === 'paused') update.paused = parseInt(value);
    this.clickLog.next(update);
  }
}
