import { Component, OnInit } from '@angular/core';


import { CustomeService } from '../../componentes/services/custome.service'

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  constructor(private customerService: CustomeService) { }

    ngOnInit(): void {
    this.customerService.getCustomers().subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

}
