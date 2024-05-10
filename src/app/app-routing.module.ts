import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderingComponent } from './ordering/ordering.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MenuItemComponent } from './Item-Modals/menu-item/menu-item.component';
import { CartComponent } from './cart/cart.component';
import { authGuard } from './auth/auth.guard';
import { SignupComponent } from './signup/signup.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { QrScannerComponent } from './qr-scanner/qr-scanner.component';
import { ItemModalsComponent } from './Item-Modals/item-modals.component';



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
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'mainpage',
    component: MainpageComponent
  },
  {
    path: 'payment',
    component: PaymentComponent,
    canActivate:[authGuard]
  },
  // {
  //   path: 'ordering',
  //   component: OrderingComponent,
  //   canActivate:[authGuard]
  // },
  {
    path: 'menu',
    component: MenuComponent,
    canActivate:[authGuard]
  },
  {
    path: 'cart',
    component: CartComponent
    // redirectTo: ''
  },
  {
    path: 'qr',
    component: QrScannerComponent
    // redirectTo: ''
  },
  {
    path: 'item-modals',
    component: ItemModalsComponent
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
