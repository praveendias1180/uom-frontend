import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  {path : 'product' , component: ProductsComponent},
  {path : 'product-detail-view/:id' , component: ViewProductComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
