import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BillDetailComponent } from './bill-detail/bill-detail.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { SalesService } from 'src/app/service/sales.service';
import { HttpClientModule } from '@angular/common/http';
import { EmitterService } from 'src/app/emitter.service';
import { CurrencyPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    BillDetailComponent,
    CategoryComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule ,HttpClientModule ],
  providers: [SalesService,EmitterService,CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
