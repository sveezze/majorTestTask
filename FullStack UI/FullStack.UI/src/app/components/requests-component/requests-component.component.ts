import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductStoreService } from 'src/app/services/productstore.service';

@Component({
  selector: 'app-requests-component',
  templateUrl: './requests-component.component.html',
  styleUrls: ['./requests-component.component.css']
})
export class RequestsComponent implements OnInit{

  public popupVisible: boolean = false;
  public productsToBuy: any;
  public isLoadPanelVisible = true;
  public amount: string = '';

  constructor(
    private productStoreService: ProductStoreService
  ){ }

   ngOnInit(){

    this.productStoreService.GetProductsToBuy()
      .subscribe(x => {
        this.productsToBuy = x;
      })
      this.isLoadPanelVisible = false;
   }
   openPop(){
    this.popupVisible = true;
   }
   buyPr(){
    this.popupVisible = false;
   }
   isValueNull(amount: string){
    if(amount == ''){
      return 'закрыть';
    }
    else
      return 'купить'
   }
}
