import { Component, ElementRef, HostListener, Inject, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dynamic-loading',
  templateUrl: './dynamic-loading.component.html',
  styleUrls: ['./dynamic-loading.component.css']
})
export class DynamicLoadingComponent {

  arrayWithValues = [1, 2, 3, 4, 5];
  template: any;
  public getScreenWidth: any;
  public getScreenHeight: any;

  @ViewChild('scrollContainer', { static: true }) scrollContainer: ElementRef;

  constructor() {

  }

  ngAfterViewInit() {
    console.log("innerHeight", window.innerHeight);
    console.log("offsetHeight", this.scrollContainer.nativeElement.offsetHeight);
    console.log("pageYOffset", window.pageYOffset);
  }

  clickMe(event: any) {
    alert('Button ' + event + ' has been clicked');
  }

  @HostListener("window:scroll")
  onWindowScroll() {
    console.log("innerHeight", window.innerHeight);
    console.log("offsetHeight", this.scrollContainer.nativeElement.offsetHeight);
    console.log("pageYOffset", window.pageYOffset);
    // console.log("innerHeight",window.innerHeight);
    // console.log("innerHeight",window.innerHeight);
    const header = document.getElementById('header');
    let visibleWindowHeight;
    if (header !== null) {
      visibleWindowHeight = window.innerHeight - header.offsetHeight;
    } else {
      visibleWindowHeight = window.innerHeight;
    }
    if (visibleWindowHeight + window.pageYOffset >= this.scrollContainer.nativeElement.offsetHeight) {
      this.arrayWithValues.push(this.arrayWithValues.length + 1);
    }
  }
}
