import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../services/cart.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations: [
    trigger('cartBounce', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.8)',
      })),
      transition('small <=> large', [
        animate('300ms ease-in-out')
      ]),
    ])
  ]
})
export class NavBarComponent {
  private subscription: Subscription;

  cartState: string = 'small'; // Startzustand

  constructor(private cartService: CartService) {
    this.subscription = this.cartService.addItem$.subscribe(() => {
      this.cartState = 'large'; // Ändern Sie den Zustand auf 'large', um die Animation auszulösen
      setTimeout(() => {
        this.cartState = 'small'; // Setzen Sie den Zustand nach einer kurzen Verzögerung wieder auf 'small'
      }, 350); // Ändern Sie hier den Wert der Verzögerung nach Bedarf
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
