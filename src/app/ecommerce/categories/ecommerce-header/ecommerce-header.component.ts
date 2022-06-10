import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ecommerce-header',
  templateUrl: './ecommerce-header.component.html',
  styleUrls: ['./ecommerce-header.component.css']
})
export class EcommerceHeaderComponent implements OnInit {

  @Output()
  toggleLayout = new EventEmitter<string>();

  @Output()
  priceFilterChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  viewToggle(e: any) {
    this.toggleLayout.emit(e.target.value);
  }

  onPriceFilterChange(e: any) {
    this.priceFilterChange.emit(parseInt(e.target.value));
  }
}
