import { Component, Input, OnInit } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { TimeStamp } from '../../time-stamp';
import { DatePipe } from '@angular/common';

// M/d/yy, h:mm a

@Component({
  selector: 'app-time-stamp-logger',
  templateUrl: './time-stamp-logger.component.html',
  styleUrls: ['./time-stamp-logger.component.css']
})
export class TimeStampLoggerComponent implements OnInit {

  timeStampLog: TimeStamp[] = [];
  _buttonClicked: string;
  @Input() set actionButtonClicked(value: string) {
    this._buttonClicked = value;
    if(value !== undefined) {
      this.logTimeStamp(value);
    }

  };

  constructor() { }

  ngOnInit(): void {
    console.log(this.timeStampLog);
  }

  logTimeStamp(value: string) {
    this.timeStampLog.push({
      time: new Date(),
      action: value
    })
  }

  deleteLog() {
    this.timeStampLog = [];
  }

}
