import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ShowProductsComponent } from './components/show-products/show-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    ShowProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    SharedModule
  ]
})
export class ProductsModule { }
