import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Dishes } from 'src/models/models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() { }

  addToCart(item: Dishes) {
    const currentItems = this.cartItemsSubject.value;

    const existingItemIndex = currentItems.findIndex(
      existingItem => existingItem.title === item.title
    );
  
    if (existingItemIndex !== -1) {
      const updatedItems = [...currentItems];
      updatedItems[existingItemIndex].quantity++;
      this.cartItemsSubject.next(updatedItems);
    } else {
      const updatedItems = [...currentItems, { ...item, quantity: 1 }];
      this.cartItemsSubject.next(updatedItems);
    }
  }

  removeFromCart(item: Dishes) {
    const currentItems = this.cartItemsSubject.value;  
    const itemIndexToRemove = currentItems.findIndex(cartItem => cartItem.id === item.id);
  

    // hier Platzhalter mit Modal logik ersetzen, bei der "ok" oder "abbrechen" ausgewählt wird
    // if(3/1 == 0){
      if (itemIndexToRemove !== -1) {
        const updatedItems = currentItems.filter((_, index) => index !== itemIndexToRemove);
        this.cartItemsSubject.next(updatedItems);
      }
    // }

  }

  private addItemSubject = new Subject<void>();

  addItem$ = this.addItemSubject.asObservable();

  triggerAnimation() {
    this.addItemSubject.next();
  }
}