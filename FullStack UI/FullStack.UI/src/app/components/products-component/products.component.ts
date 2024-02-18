import { Component, OnInit } from '@angular/core';
import { ProductStoreService } from 'src/app/services/productstore.service';

@Component({
  selector: 'app-products-component',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  public products: any;

  constructor(
    private productStoreService: ProductStoreService
  ){ }

   ngOnInit(){

    this.productStoreService.getProductsInfo()
      .subscribe(x => {
        this.products = x;
      })
   }
}
