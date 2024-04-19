import { Component } from '@angular/core';
import { Dishes } from 'src/models/models';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  showModal: boolean = false; // Variable zur Steuerung der Modal-Anzeige
  lastItem: Dishes = { id: '', title: '', description: '', price: 0.00, link: '', quantity: 0, ingredients: [] };

  constructor(private cartService: CartService) {}

  // Methode zum Öffnen des Modals
  openModal() {
    this.showModal = true;
  }

  // Methode zum Schließen des Modals
  closeModal() {
    this.showModal = false;
  }

  openItemView(item: Dishes){
    console.log("Fick dich huan");
    this.lastItem = item;
    this.openModal();
  }

  addToCartService(){
    this.cartService.addToCart(this.lastItem);
    this.triggerAnimation();
    this.closeModal();
  }

  triggerAnimation() {
    this.cartService.triggerAnimation();
  }
}
