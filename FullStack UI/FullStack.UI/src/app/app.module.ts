import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserComponentComponent } from './components/user-component/user-component.component';
import { ProductsComponent } from './components/products-component/products.component';
import { ProductsCountComponent } from './components/products-count/products-count.component';
import { RequestsComponentComponent } from './components/requests-component/requests-component.component';
import { SalesComponentComponent } from './components/sales-component/sales-component.component';
import { SuppliersComponentComponent } from './components/suppliers-component/suppliers-component.component';
import { WarehouseComponentComponent } from './components/warehouse-component/warehouse-component.component';
import { ReviewComponentComponent } from './components/review-component/review-component.component';
import { DxDataGridModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    UserComponentComponent,
    ProductsCountComponent,
    RequestsComponentComponent,
    SalesComponentComponent,
    SuppliersComponentComponent,
    WarehouseComponentComponent,
    ReviewComponentComponent,
    ProductsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        DxDataGridModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
