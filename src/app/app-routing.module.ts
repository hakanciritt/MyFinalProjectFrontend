import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  { path: "", component: ProductComponent, pathMatch: "full" },
  { path: "products", component: ProductComponent },
  { path: "products/category/:categoryId", component: ProductComponent },
  { path: "cartitems", component: CartSummaryComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
