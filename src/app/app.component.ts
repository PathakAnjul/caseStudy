import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'caseStudy';

  routes = [
    {
      label: 'Floating Banner',
      path: 'floating-banner'
    },
    {
      label: 'Ecommerce Site',
      path: 'categories'
    },
    {
      label: 'Countdown Timer',
      path: 'count-down-timer'
    },
    {
      label: 'Countdown Timer 2',
      path: 'count-down-timer-2'
    },
    {
      label: 'Sorting List',
      path: 'sorted-list'
    },
    {
      label: 'Dynamic Loading',
      path: 'dynamic-scroll'
    }
  ]

  constructor() {
  }

}
