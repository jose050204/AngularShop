import { Component, inject } from '@angular/core';
import { ProductCard } from '../../../shared/components/product-card/product-card';
import { Products } from '../../../core/services/products';

@Component({
  imports: [ProductCard],
  selector: 'app-product-list',
  styleUrl: './product-list.scss',
  templateUrl: './product-list.html',
})
export class ProductList {
  private readonly productsService = inject(Products);
  readonly products = this.productsService.products
}
