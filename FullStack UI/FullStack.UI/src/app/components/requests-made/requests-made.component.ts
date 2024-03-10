import { Component } from '@angular/core';
import { ProductStoreService } from 'src/app/services/productstore.service';

@Component({
  selector: 'app-requests-made',
  templateUrl: './requests-made.component.html',
  styleUrls: ['./requests-made.component.css']
})
export class RequestsMadeComponent {
  
  public requests: any;
  public isLoadPanelVisible = true;

  constructor(
    private productStoreService: ProductStoreService
  ){ }

   ngOnInit(){

    this.productStoreService.GetRequestProducts()
      .subscribe(x => {
        x.forEach(el => {
          el.requestDate = new Date(el.requestDate)
        });
        this.requests = x;
      })
      this.isLoadPanelVisible = false;
   }
}
