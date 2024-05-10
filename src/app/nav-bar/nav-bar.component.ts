import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';
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
      this.cartState = 'large'; // Zustand wird auf 'large' geändert, um die Animation auszulösen
      setTimeout(() => {
        this.cartState = 'small'; // Zustand wird nach einer kurzen Verzögerung wieder auf 'small' gesetzt
      }, 350); // Verzögerung in Millisekunden
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
