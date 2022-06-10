import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, merge, of, range, BehaviorSubject, Subject } from 'rxjs';
import { mapTo, scan, switchMap, takeUntil, concatMap, delay, mergeMap, tap, skipWhile, map } from 'rxjs/operators';
import { CountDownService } from '../count-down.service';
import { TimeFormatPipe as timeFormat } from '../time-format.pipe';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit, AfterViewInit {


  @ViewChild('start', { static: true })
  startBtn: ElementRef;

  @ViewChild('pause', { static: true })
  pauseBtn: ElementRef;

  @ViewChild('reset', { static: true })
  resetBtn: ElementRef;

  intervalObs$;
  max = 0;
  min = 0;

  constructor(public d: CountDownService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const start$ = fromEvent(this.startBtn.nativeElement, 'click').pipe(mapTo(true));
    const pause$ = fromEvent(this.pauseBtn.nativeElement, 'click').pipe(mapTo(false));
    const reset$ = fromEvent(this.resetBtn.nativeElement, 'click').pipe(mapTo(null));

    const stateChange$ = this.d.Counter$.pipe(mapTo(null));
    this.intervalObs$ = merge(start$, pause$, reset$, stateChange$).pipe(
      switchMap(isCounting => {

        if (isCounting === null) return of(null);

        return isCounting ? interval(1000) : of();
      }),


      scan((accumulatedValue, currentValue) => {
        if (accumulatedValue === 0) return accumulatedValue;
        if (currentValue === null || !accumulatedValue) return this.d.getTotalSeconds();
        return --accumulatedValue;
      })
    );

    this.d.intervalObs$.subscribe(val => {
      console.log(val)
      this.max = val.max;
      this.min = val.min;
    });

  }

}