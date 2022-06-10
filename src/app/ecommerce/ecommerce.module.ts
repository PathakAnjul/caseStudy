import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { EcommerceHeaderComponent } from './categories/ecommerce-header/ecommerce-header.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './products.service';
import { ProductCardComponent } from './categories/product-card/product-card.component';
import { EcommerceRoutingModule } from './ecommerce-routing.module';



@NgModule({
  declarations: [
    CategoriesComponent,
    EcommerceHeaderComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    EcommerceRoutingModule
  ],
  providers: [ProductsService]
})
export class EcommerceModule { }
