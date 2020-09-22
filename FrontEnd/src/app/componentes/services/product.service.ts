import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ProductI } from '../models/product'
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_URI = 'http://localhost:3050';
  authSubject = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    return this.httpClient.get(`${this.API_URI}/Product`);
  }

  getProduct(id: string) {
    return this.httpClient.get(`${this.API_URI}/Product/${id}`);
  }

  newProduct(product: ProductI): Observable<ProductI> {
    return this.httpClient.post<ProductI>(`${this.API_URI}/add-Product`, product);
  }

  deleteProduct(id: string) {
    return this.httpClient.delete(`${this.API_URI}/delete-Product/${id}`);
  }

  updateProduct(id: string, updateProduct: ProductI): Observable<ProductI> {
    return this.httpClient.put<ProductI>(`${this.API_URI}/update-Product/${id}`, updateProduct); 
  }

}
