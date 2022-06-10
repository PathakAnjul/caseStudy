import { Directive, ElementRef, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { FloaterComponent } from './floater/floater.component';

@Directive({
  selector: '[appModalHighlight]'
})
export class ModalHighlightDirective implements OnInit{

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.renderer.addClass(this.el.nativeElement, 'banner-highlight' );
 }

 ngOnInit() {
   document.getElementById("modal")?.appendChild(this.el.nativeElement)
 }

}
