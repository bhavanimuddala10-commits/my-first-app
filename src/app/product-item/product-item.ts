import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  standalone: true,
  template: `
    <div style="border:1px solid #ccc; padding:8px; margin:5px">
      <p>{{ product.name }}</p>
      <button (click)="addToCart()">Add to Cart</button>
    </div>
  `
})
export class ProductItemComponent {

  @Input() product!: { id: number; name: string };

  @Output() added = new EventEmitter<number>();

  addToCart() {
    this.added.emit(this.product.id);
  }
}
