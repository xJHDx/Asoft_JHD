import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SaleI } from '../models/sale'
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  API_URI = 'http://localhost:3050';
  authSubject = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient) { }
  getSales() {
    return this.httpClient.get(`${this.API_URI}/Sale`);
  }

  getSale(id: string) {
    return this.httpClient.get(`${this.API_URI}/Sale/${id}`);
  }

  newSale(sale: SaleI): Observable<SaleI> {
    return this.httpClient.post<SaleI>(`${this.API_URI}/add-Sale`, sale);
  }

  deleteSale(id: string) {
    return this.httpClient.delete(`${this.API_URI}/delete-Sale/${id}`);
  }

  updateSale(id: string, updateSale: SaleI): Observable<SaleI> {
    return this.httpClient.put<SaleI>(`${this.API_URI}/update-Sale/${id}`, updateSale); 
  }

}
