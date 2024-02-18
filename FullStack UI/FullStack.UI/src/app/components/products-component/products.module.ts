import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxDataGridModule } from 'devextreme-angular';
import { ProductsComponent } from './products.component';



@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    DxDataGridModule
  ]
})
export class ProductsComponentModule {
  constructor(){}

  ngOnInit(){

  }

 }
