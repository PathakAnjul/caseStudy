import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-logger',
  templateUrl: './click-logger.component.html',
  styleUrls: ['./click-logger.component.css']
})
export class ClickLoggerComponent implements OnInit {

  startCount: number = 0;
  pauseCount: number = 0;

  @Input() set actionButtonClicked(value: string) {
    switch (value) {
      case 'STARTED': {
        this.startCount++;
        break;
      }

      case 'PAUSED': {
        this.pauseCount++;
        break;
      }
    }
  };
  constructor() { }

  ngOnInit(): void {
  }

  deleteLog() {
    this.startCount = 0;
    this.pauseCount = 0;
  }

}
