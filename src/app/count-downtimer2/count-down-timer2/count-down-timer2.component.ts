import { Component, OnInit } from '@angular/core';
import { CountDownService } from '../count-down.service';

@Component({
  selector: 'app-count-down-timer2',
  templateUrl: './count-down-timer2.component.html',
  styleUrls: ['./count-down-timer2.component.css']
})
export class CountDownTimer2Component implements OnInit {

  constructor(public counterSvc: CountDownService) { }

  ngOnInit(): void {
  }

}
