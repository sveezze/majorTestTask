import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxDataGridModule } from 'devextreme-angular';
import { ProductsComponentComponent } from './products-component.component';



@NgModule({
  declarations: [
    ProductsComponentComponent
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
