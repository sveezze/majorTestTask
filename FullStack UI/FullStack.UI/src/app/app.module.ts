import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideocardsListComponent } from './components/videocards/videocards-list/videocards-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddVideocardComponent } from './components/videocards/add-videocard/add-videocard.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VideocardsListComponent,
    AddVideocardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
