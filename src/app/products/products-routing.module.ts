import { ShowProductsComponent } from './components/show-products/show-products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  {path:'products' , component:ShowProductsComponent},
  {path:'details/:id' , component:ProductDetailsComponent},
  //{path:'**' ,redirectTo:'products', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
