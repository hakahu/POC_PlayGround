import { Component } from '@angular/core';
import { DishType } from 'src/app/enums/enums';
import { Dishes } from 'src/models/models';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  showModal: boolean = false;
  lastItem: Dishes = { id: '', title: '', description: '', price: 0.00, link: '', quantity: 0, ingredients: [], dishType: DishType.CUSTOM };

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
