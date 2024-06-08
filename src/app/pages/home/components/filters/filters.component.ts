import { Component, EventEmitter, Output } from '@angular/core';
import { StoreService } from '../../../../services/store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styles: ``
})
export class FiltersComponent {
    


  categories: Array<string> = [];
  @Output() showCategory = new EventEmitter<string>();
  catagoriesSubscription: Subscription | undefined
  
  constructor(private storeService:StoreService) {}
  ngOnInit(): void {
    this.catagoriesSubscription = this.storeService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
  
  onShowCategory(category: string) {
    this.showCategory.emit(category);
  }

  ngOnDestroy() {
    this.catagoriesSubscription?.unsubscribe();
  }

}
