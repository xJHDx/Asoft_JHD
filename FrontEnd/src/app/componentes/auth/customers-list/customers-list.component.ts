import { Component, HostBinding, OnInit } from '@angular/core';
import { CustomerI } from '../../models/custome';

import { CustomeService } from '../../services/custome.service'

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  customerI: CustomerI = {
    idCliente: null,
    nombre: '',
    apellido: '',
    dni: null,
    telefono: null,
    email: '',
  };

  customer: any = []; 

  constructor(private customerService: CustomeService) { }

    ngOnInit(): void {
    this.customerService.getCustomers().subscribe(
      res => {
        this.customer = res; 
      },
      err => console.log(err)
    );
  }

  saveNewCutomer(): void {
    delete this.customerI.idCliente;
    
    this.customerService.newCustomer(this.customerI)
    .subscribe(
      res => {
        console.log(res); 
      },
      err => console.log(err)
    )
  }

  // updateCustomer(): void {
  //   this.customerService.updateCustomer(this.customerI)
  //   .subscribe(
  //     res => {
  //       console.log(res); 
  //     },
  //     err => console.log(err)
  //   )
  // }

  deleteCustomer(id: string): void{
    console.log(id)
  }

}
