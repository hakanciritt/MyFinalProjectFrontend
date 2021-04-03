import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { LoginComponent } from './components/login/login.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductComponent } from './components/product/product.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: "", component: ProductComponent, pathMatch: "full" },
  { path: "products", component: ProductComponent },
  { path: "products/category/:categoryId", component: ProductComponent },
  { path: "cartitems", component: CartSummaryComponent },
  { path: "products/add", component: ProductAddComponent, canActivate: [LoginGuard] },
  { path: "login", component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
