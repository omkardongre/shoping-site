import { Component, Input } from '@angular/core';
import { Cart, CartItem } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl : './header.component.html',
})
export class HeaderComponent {

  constructor(private cartService:CartService) { }

  private _cart : Cart = {items: []};
  itemsQuantity = 0;
    
  @Input()
  get cart() : Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;
    this.itemsQuantity = this._cart.items.reduce((acc, item) => acc + item.quantity, 0);
  }

  getTotal(item:Array<CartItem>) : number {
    return this.cartService.getTotal(item);
  }

  onClearCart() {
    this.cartService.clearCart();
  }
}
