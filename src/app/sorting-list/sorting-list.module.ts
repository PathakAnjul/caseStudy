import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { SortingListRoutingModule } from './sorting-list-routing.module';



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    SortingListRoutingModule
  ]
})
export class SortingListModule { }
