import { Component } from '@angular/core';
import { CartService } from './services/cart.service';
import { Cart } from './models/cart.model';

@Component({
  selector: 'app-root',
  template: `
    <app-header [cart]="cart"></app-header>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'store';

  cart : Cart = {items: []};

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cartService.cart.subscribe((cart) => {
      this.cart = cart;
    });
  }
  


}
