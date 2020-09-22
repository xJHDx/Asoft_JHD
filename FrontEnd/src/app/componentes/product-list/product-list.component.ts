import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../componentes/services/Product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }
  
}
