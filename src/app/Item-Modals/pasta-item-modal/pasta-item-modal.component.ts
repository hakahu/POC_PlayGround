import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Dishes } from 'src/models/models';

@Component({
  selector: 'app-pasta-item-modal',
  templateUrl: './pasta-item-modal.component.html',
  styleUrls: ['./pasta-item-modal.component.css']
})
export class PastaItemModalComponent {
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
