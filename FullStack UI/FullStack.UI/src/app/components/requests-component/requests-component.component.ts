import { Component, OnInit, ViewChild } from '@angular/core';
import { finalize, timeout } from 'rxjs';
import { ProductStoreService } from 'src/app/services/productstore.service';

@Component({
  selector: 'app-requests-component',
  templateUrl: './requests-component.component.html',
  styleUrls: ['./requests-component.component.css']
})
export class RequestsComponent implements OnInit{

  public popupText: string = '';
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

   openPop(e: any){
    this.popupText = e.value;
    this.popupVisible = true;
   }

   buyPr(amountOfP: string){
    this.productStoreService.BuyProductsForWO(amountOfP).pipe(
        finalize(() => {
            this.productStoreService.GetProductsToBuy().subscribe(x => {
                this.productsToBuy = x;
            });
        })
    ).subscribe(x => {
    });
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
