import { Component } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  template: `
    <h2>Products</h2>

    @for (item of products; track item.id) {
      <app-product-item
        [product]="item"
        (added)="onProductAdded($event)">
      </app-product-item>
    }

    <p><strong>Cart:</strong> {{ cart }}</p>
  `
})
export class ProductListComponent {

  products = [
    { id: 1, name: 'Angular Book' },
    { id: 2, name: 'React Book' },
    { id: 3, name: 'Vue Book' }
  ];

  cart: number[] = [];

  onProductAdded(productId: number) {
    this.cart.push(productId);
  }
}
