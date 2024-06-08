import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<Cart>({items: []});
  constructor(private _snackBar:MatSnackBar) { }

  addToCart(item: CartItem): void {
    const items = [...this.cart.value.items];
    let itemExists = false;

    for (const _item of items) {
      if (_item.id === item.id) {
        _item.quantity += 1;
        itemExists = true;
        break;
      }
    }

    if (!itemExists) {
      items.push(item);
    }

    this.cart.next({ items });

    this._snackBar.open('1 item added to cart', 'Ok', {
      duration: 3000,
    });
  }

  getTotal(items : Array<CartItem>): number {
    return items.map((item) => {
      return item.price * item.quantity;
    }).reduce((acc, value)=> {
      return acc + value
    }, 0)
  }

  clearCart() : void {
    this.cart.next({items: []});
    this._snackBar.open('Cart cleared', 'Ok', {
      duration: 3000,
    });
  }

  removeFromCart(item: CartItem) {
    const items = this.cart.value.items.filter(i => i.id !== item.id);
    this.cart.next({items});
    this._snackBar.open('1 item removed from cart', 'Ok', {
      duration: 3000,
    });
  }

  removeQuantity(item: CartItem) : void {
    let itemExists = false;
    const items = [...this.cart.value.items];
    for (const _item of items) {
      if (_item.id === item.id) {
        _item.quantity -= 1;
        if (_item.quantity === 0) {
          this.removeFromCart(_item);
          itemExists = true;
        }
        break;
      }
    }

    if (!itemExists) {
      this.cart.next({items});
    }

  }

}
