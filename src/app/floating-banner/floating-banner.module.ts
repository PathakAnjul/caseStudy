import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloaterComponent } from './floater/floater.component';
import { FloatingBannerComponent } from './floating-banner.component';
import { FloatingBannerRoutingModule } from './floating-banner-routing.module';
import { ModalHighlightDirective } from './modal-highlight.directive';



@NgModule({
  declarations: [
    FloatingBannerComponent,
    FloaterComponent,
    ModalHighlightDirective

  ],
  imports: [
    CommonModule,
    FloatingBannerRoutingModule
  ]
})
export class FloatingBannerModule { }
