import { Injectable, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CustomerI } from '../models/custome'
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CustomeService {

  API_URI = 'http://localhost:3050';
  authSubject = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient) { }

  getCustomers() {
    return this.httpClient.get(`${this.API_URI}/customers`);
  }

  getcustomer(id: string) {
    return this.httpClient.get(`${this.API_URI}/customer/${id}`);
  }

  newCustomer(customer: CustomerI): Observable<CustomerI> {
    return this.httpClient.post<CustomerI>(`${this.API_URI}/add`, customer);
  }

  deleteCustomer(id: string) {
    return this.httpClient.delete(`${this.API_URI}/delete/${id}`);
  }

  updateCustomer(id: string, updateCustomer: CustomerI): Observable<CustomerI> {
    return this.httpClient.put<CustomerI>(`${this.API_URI}/update/${id}`, updateCustomer); 
  }
  
}
