import { Component, OnInit } from '@angular/core';

import { SaleService } from '../../componentes/services/sale.service';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.css']
})
export class SaleListComponent implements OnInit {

  constructor(private saleService: SaleService) { }

  ngOnInit(): void {
    this.saleService.getSales().subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

}
