import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  productDetails: Product[] = [];
  filteredProducts: Product[] = [];
  layout: string = 'listView'
  constructor(private products: ProductsService) { }


  ngOnInit(): void {
    this.products.getProducts().subscribe((res: Product[]) => {
      console.log(res)
      this.productDetails = res;
      this.filteredProducts = this.productDetails;
      console.log(this.productDetails)

    });
  }

  toggleLayout(layout: any) {
    this.layout = layout
  }

  onPriceFilterChange(filterValue: number) {
    let minPriceValue: number;
    let maxPriceValue: number;

    switch (filterValue) {
      case 0: {
        minPriceValue = 0;
        break;
      }
      
      case 1: {
        minPriceValue = 1;
        maxPriceValue = 100;
        break;
      }

      case 100: {
        minPriceValue = 100;
        maxPriceValue = 500;
        break;
      }

      case 500: {
        minPriceValue = 500;
        maxPriceValue = 1000;
        break;
      }

      case 1000: {
        minPriceValue = 1000;
        maxPriceValue = 5000;
        break;
      }

      case 5000: {
        minPriceValue = 5000;
        break;
      }

      default: {
        console.log("default")
      }
    }

    this.filteredProducts = this.productDetails.filter(product => {

      if (maxPriceValue) {
        return product.price > minPriceValue && product.price <= maxPriceValue;
      }

      else {
        return product.price > minPriceValue;
      }
    })

    console.log(this.filteredProducts);
  }

}
