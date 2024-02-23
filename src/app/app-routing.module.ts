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
import { authGuard } from './auth/auth.guard';
import { Menu2Component } from './menu2/menu2.component';
import { Menu3Component } from './menu3/menu3.component';

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
    component: PaymentComponent,
    canActivate:[authGuard]
  },
  {
    path: 'ordering',
    component: OrderingComponent,
    canActivate:[authGuard]
  },
  {
    path: 'menu-item',
    component: MenuItemComponent,
    canActivate:[authGuard]
  },
  {
    path: 'menu',
    component: MenuComponent,
    canActivate:[authGuard]
  },
  {
    path: 'menu2',
    component: Menu2Component,
    canActivate:[authGuard]
  },
  {
    path: 'menu3',
    component: Menu3Component,
    canActivate:[authGuard]
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
