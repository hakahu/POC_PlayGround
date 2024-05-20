import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderingComponent } from './ordering/ordering.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MenuItemComponent } from './Item-Modals/menu-item/menu-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserAnimationsModule }  
    from "@angular/platform-browser/animations"; 
import { DataViewModule } from "primeng/dataview";
import { CartComponent } from './cart/cart.component';
import { ProductService } from '../services/product.service';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SignupComponent } from './signup/signup.component';
import { CartModalComponent } from './cart-modal/cart-modal.component';
import { QrScannerComponent } from './qr-scanner/qr-scanner.component';
import { PastaItemModalComponent } from './Item-Modals/pasta-item-modal/pasta-item-modal.component';
import { BurgerItemModalComponent } from './Item-Modals/burger-item-modal/burger-item-modal.component';
import { DesertItemModalComponent } from './Item-Modals/desert-item-modal/desert-item-modal.component';
import { SaladItemModalComponent } from './Item-Modals/salad-item-modal/salad-item-modal.component';
import { ItemModalsComponent } from './Item-Modals/item-modals.component';
import { CartService } from 'src/services/cart.service';
import { PizzaItemModalComponent } from './Item-Modals/pizza-item-modal/pizza-item-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SideBarComponent,
    PaymentComponent,
    MenuItemComponent,
    OrderingComponent,
    MenuComponent,
    NavBarComponent,
    FooterComponent,
    NotFoundPageComponent,
    LandingPageComponent,
    NotFoundPageComponent,
    CartComponent,
    MainpageComponent,
    SignupComponent,
    CartModalComponent,
    QrScannerComponent,
    PastaItemModalComponent,
    BurgerItemModalComponent,
    DesertItemModalComponent,
    SaladItemModalComponent,
    ItemModalsComponent,
    PizzaItemModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    DataViewModule,  
    FormsModule
  ],
  providers: [CartService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
