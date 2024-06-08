import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';
import { StoreService } from '../../services/store.service';


const ROW_HEIGHT : {[id:number]:number}  = {1 : 400, 3 : 355, 4:350}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  
  cols: number = 4;
  rowHeight: number = ROW_HEIGHT[this.cols];
  category : string | undefined
  products: Product[] | undefined
  sort : string = 'desc'
  count = 12
  productSubscription  : Subscription | undefined


  constructor(private cartService : CartService, private storeService : StoreService) {}
  ngOnInit() {
    this.getProduct();
  }

  onItemsShowCountUpdated(newCount: number) : void {
    this.count = newCount;
    this.getProduct();
  }

  onSortUpdated(newSort: string) : void {
    this.sort = newSort;
    this.getProduct();
  
  }

  getProduct() {
    this.productSubscription = this.storeService.getAllProducts(this.sort, this.count, this.category).subscribe((data) => {
      this.products = data;
    });
  }

  onColumnCountChange(columnCount: number) : void {
    this.cols = columnCount;
    this.rowHeight = ROW_HEIGHT[columnCount];
  }

  onShowCategory(newCategory: string) {
    this.category = newCategory;
    this.getProduct();
  }

  
  onAddToCart(product: Product) : void {
    this.cartService.addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      quantity: 1,
      product: product.image
    });
  }

  ngOnDestroy() : void {
    this.productSubscription?.unsubscribe();
  }
}
