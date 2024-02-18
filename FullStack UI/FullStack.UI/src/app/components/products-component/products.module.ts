import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxDataGridModule } from 'devextreme-angular';
import { ProductsComponent } from './products.component';
import dxDataGrid from 'devextreme/ui/data_grid';



@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    DxDataGridModule
  ]
})
export class ProductsComponentModule {
 }
