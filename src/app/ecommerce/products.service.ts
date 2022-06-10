import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../constants';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {


  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(Constants.PRODUCTSAPI);
  }
}
