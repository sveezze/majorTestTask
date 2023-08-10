import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideocardsListComponent } from './components/videocards/videocards-list/videocards-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddVideocardComponent } from './components/videocards/add-videocard/add-videocard.component';
import { FormsModule } from '@angular/forms';
import { EditVideocardComponent } from './components/videocards/edit-videocard/edit-videocard.component';
import {DxSelectBoxModule} from "devextreme-angular";

@NgModule({
  declarations: [
    AppComponent,
    VideocardsListComponent,
    AddVideocardComponent,
    EditVideocardComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        DxSelectBoxModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
