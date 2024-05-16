import { Component, OnInit } from '@angular/core';
import { Dishes } from 'src/models/models';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  totalSum: number = 0;
  cartItems: Dishes[] = [
    // { id: '0', title: 'Lasagne', description: 'Eine original italienische Lasagne mit Hackfleisch.', price: 9.99, link: 'https://img.chefkoch-cdn.de/rezepte/745721177147257/bilder/668335/crop-960x540/lasagne.jpg', quantity: 2, ingredients: []},
    // { id: '1', title: 'Pelmeni', description: 'Russische Pelmeni mit Schmand und/oder Pfeffer.',  price: 10.99, link: 'https://img.chefkoch-cdn.de/rezepte/1825431296062925/bilder/373883/crop-960x540/pelmeni-mit-butter-und-oder-senf.jpg' , quantity: 1, ingredients: []},
    // { id: '2', title: 'Pizza Margharita', description: 'Pizza Margharita mit Käse überbacken..',  price: 12.99, link: 'https://img.zeit.de/zeit-magazin/wochenmarkt/2023-08/pizza-margherita-giovanni-stincone-rezept/super__450x300__mobile__scale_2' , quantity: 3, ingredients: []},
    // { id: '3', title: 'Gemischter Salat', description: 'Gemischter Salat mit Tomaten und Gurken.',  price: 6.99, link: 'https://www.gaumenfreundin.de/wp-content/uploads/2022/12/Gemischter-Salat-Gaumenfreundin.jpg' , quantity: 2, ingredients: []},
    // { id: '4', title: 'Double Cheesburger', description: 'Double Cheeseburger mit 150g Angus Fleisch.',  price: 14.99, link: 'https://www.gutekueche.at/storage/media/recipe/136820/double-smashed-cheese-burger.jpg' , quantity: 4, ingredients: []},
    // { id: '5', title: 'Tortillas Mexikanisch', description: 'Überbackene Tortillas mit Hackfleisch.',  price: 7.99, link: 'https://carneo-online.de/wp-content/uploads/2020/04/11_19-%C3%9Cberbackene-Nachos-AdobeStock_Pixel-Shot.jpg' , quantity: 2, ingredients: []},
    // Add more filter options as needed
  ];

  constructor(private cartService: CartService)
  {
    this.updateTotal();
  };

  updateTotal() {
    this.totalSum = this.cartItems.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    this.totalSum = +this.totalSum.toFixed(2);
  }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.updateTotal();
    });
  }

  removeFromCartService(item: Dishes){
    this.cartService.removeFromCart(item);
  }
}
