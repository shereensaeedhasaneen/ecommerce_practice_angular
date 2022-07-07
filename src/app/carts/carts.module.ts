import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { CartsRoutingModule } from './carts-routing.module';
import { CartComponent } from './components/cart/cart.component';
import { SharedModule } from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartsRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ]
})
export class CartsModule { }
