import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridsComponent } from './grids/grids.component';
import { SignaturreComponent } from './signaturre/signaturre.component';

@NgModule({
  declarations: [
    AppComponent,
    GridsComponent,
    SignaturreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
