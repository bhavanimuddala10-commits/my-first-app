import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  template: `
    <h3>Product Detail</h3>
    <p>Product ID: {{ productId }}</p>
  `
})
export class ProductDetail {
  productId!: string;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id')!;
    });
  }
}
