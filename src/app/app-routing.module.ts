import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderingComponent } from './ordering/ordering.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [

  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'ordering',
    component: OrderingComponent
  },
  {
    path: 'menu-item',
    component: MenuItemComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
  path: 'anime',
  component: LandingPageComponent
  },
  {
    path: 'cart',
    component: CartComponent
    // redirectTo: ''
  },
  {
    path: '**',
    component: NotFoundPageComponent
    // redirectTo: ''
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
