import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { DishType } from 'src/app/enums/enums';
import { Dishes } from 'src/models/models';
import { CartService } from 'src/services/cart.service';
import { BurgerItemModalComponent } from '../burger-item-modal/burger-item-modal.component';
import { PastaItemModalComponent } from '../pasta-item-modal/pasta-item-modal.component';
import { PizzaItemModalComponent } from '../pizza-item-modal/pizza-item-modal.component';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements AfterViewInit {
  showModal: boolean = false;
  lastItem: Dishes = { id: '', title: '', description: '', price: 0.00, link: '', quantity: 0, ingredients: [], dishType: DishType.CUSTOM };
  @ViewChild(PizzaItemModalComponent)
  pizzaItemModal!: PizzaItemModalComponent;
  @ViewChild(BurgerItemModalComponent)
  burgerItemModal!: BurgerItemModalComponent;
  @ViewChild(PastaItemModalComponent)
  pastaItemModal!: PastaItemModalComponent;

  ngAfterViewInit() {
    // Now you can access firstChildComponent and secondChildComponent
  }

  constructor(private cartService: CartService) {
  }

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
    if (this.lastItem.dishType === DishType.PIZZA) {
      this.pizzaItemModal.openItemView(this.lastItem);
    } 
    else if (this.lastItem.dishType === DishType.BURGER) {
      this.burgerItemModal.openItemView(this.lastItem);
    }
    else if (this.lastItem.dishType === DishType.PASTA) {
      this.pastaItemModal.openItemView(this.lastItem);
    }

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
