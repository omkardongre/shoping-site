import { Component } from '@angular/core';
import { Cart, CartItem } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';
import { HttpClient } from '@angular/common/http';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: []
})
export class CartComponent {

  dataSource: CartItem[] = [];
  displayedColumns: string[] = [
    'product', 
    'name', 
    'price', 
    'quantity', 
    'total',
    'action'
  ];

  constructor(private cartService:CartService, private http : HttpClient) { }
  ngOnInit(): void {
    this.cartService.cart.subscribe((cart) => {
      this.dataSource = cart.items;
    })
  }

  getTotal(items : Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  onClearCart () : void {
    this.cartService.clearCart();
  }

  onRemoveFromCart(item: CartItem) : void {
    this.cartService.removeFromCart(item);
  }

  onRemoveQuantity(item: CartItem) : void {
    this.cartService.removeQuantity(item);
  }
  
  onAddQuantity(item: CartItem) {
    this.cartService.addToCart(item);
  }

  onCheckout() {
    this.http.post('http://localhost:4242/checkout', {
      items:this.dataSource
    }).subscribe(async (res:any) => {
      let stripe = await loadStripe(environment.stripePublicKey);
        stripe?.redirectToCheckout({ sessionId: res.session.id })
      })
  }

    
}
