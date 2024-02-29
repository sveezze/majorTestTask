import { Component, OnInit } from '@angular/core';
import { ProductStoreService } from 'src/app/services/productstore.service';

@Component({
  selector: 'app-products-component',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  public products: any;
  public isLoadPanelVisible = true;

  constructor(
    private productStoreService: ProductStoreService
  ){ }

   ngOnInit(){

    this.productStoreService.GetProductsWithSale()
      .subscribe(x => {
        this.products = x;
      })
      this.isLoadPanelVisible = false;
   }
}
