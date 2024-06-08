import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
})

export class ProductBoxComponent {

  @Input() fullWidthMode = false;
  @Output() addToCart = new EventEmitter<Product>();
  @Input() product : Product | undefined
  
  
  constructor() {}
  ngOnInit() {}
  
  onAddToCart() {
    this.addToCart.emit(this.product);  
  }
}
