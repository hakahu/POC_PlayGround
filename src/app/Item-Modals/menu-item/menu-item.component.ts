import { Component } from '@angular/core';
import { Dishes } from 'src/models/models';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  // Variable zur Steuerung der Modal-Anzeige
  showModal: boolean = false;
  // Leeres lastItem wird initiiert
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

  // Vor dem Öffnen des Modals wird das zuletzt hinzugefügte Item gespeichert
  openItemView(item: Dishes){
    this.lastItem = item;
    this.openModal();
  }

  // Das Item wird dem CartService übergeben, 
  // eine Animation für das Warenkorb-Icon wird ausgeführt und das Modal wird geschlossen
  addToCartService(){
    this.cartService.addToCart(this.lastItem);
    this.cartService.triggerAnimation();
    this.closeModal();
  }
}
