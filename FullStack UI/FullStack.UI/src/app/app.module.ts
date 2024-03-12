import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products-component/products.component';
import { RequestsComponent } from './components/requests-component/requests-component.component';
import { DxButtonModule, DxDataGridModule, DxLoadPanelModule, DxPopupModule, DxTemplateModule, DxTextBoxModule } from 'devextreme-angular';
import { RequestsMadeComponent } from './components/requests-made/requests-made.component';
import { CommentsComponent } from './components/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestsComponent,
    ProductsComponent,
    RequestsMadeComponent,
    CommentsComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        DxDataGridModule,
        DxLoadPanelModule,
        DxPopupModule,
        DxTextBoxModule,
        DxButtonModule,
        DxTemplateModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
