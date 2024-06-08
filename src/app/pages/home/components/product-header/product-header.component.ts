import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
})
export class ProductHeaderComponent {
  
  @Output() columnCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();

  sort = "desc";
  itemsShowCount: number = 12;

  constructor() {}
  ngOnInit() {}

  onSortUpdated (newSort: string) {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }

  onItemsShowCountUpdated (newItemsShowCount: number) {
    this.itemsShowCount = newItemsShowCount;
    this.itemsCountChange.emit(newItemsShowCount);
  }

  onColumnCountUpdated (newColumnCount: number) {
    this.columnCountChange.emit(newColumnCount);
  }
}
