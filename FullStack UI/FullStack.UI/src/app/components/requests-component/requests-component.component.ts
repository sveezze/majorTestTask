import { Component, OnInit } from '@angular/core';
import { ProductStoreService } from 'src/app/services/productstore.service';

@Component({
  selector: 'app-requests-component',
  templateUrl: './requests-component.component.html',
  styleUrls: ['./requests-component.component.css']
})
export class RequestsComponent implements OnInit{

  public productsToBuy: any;
  public isLoadPanelVisible = true;

  constructor(
    private productStoreService: ProductStoreService
  ){ }

   ngOnInit(){

    this.productStoreService.GetBoughtProducts()
      .subscribe(x => {
        this.productsToBuy = x;
      })
      this.isLoadPanelVisible = false;
   }
}
