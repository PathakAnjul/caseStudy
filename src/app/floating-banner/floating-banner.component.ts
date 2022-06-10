import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-banner',
  templateUrl: './floating-banner.component.html',
  styleUrls: ['./floating-banner.component.css']
})
export class FloatingBannerComponent implements OnInit {

  showBanner: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  closeModal(e: boolean) {
    if(e==true) {
      this.showBanner = false
    }
  }

}
