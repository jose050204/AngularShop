import { Component, computed, inject, signal } from '@angular/core';
import { ProductCard } from '../../../shared/components/product-card/product-card';
import { Products } from '../../../core/services/products';
import { ProductCategory } from '../../../models/product.model';

@Component({
  imports: [ProductCard],
  selector: 'app-product-list',
  styleUrl: './product-list.scss',
  templateUrl: './product-list.html',
})
export class ProductList {
  private readonly productsService = inject(Products);
  readonly products = this.productsService.products

  readonly categories: {value: ProductCategory; label: string}[] = [
    {value: 'verduras', label: 'Verduras'},
    {value: 'frutas', label: 'Frutas'},
    {value: 'zumos', label: 'Zumos'},
  ];

  readonly selectedCategory = signal<ProductCategory | null>(null);

  readonly filteredProducts = computed(() => {
    const category = this.selectedCategory();
    const products = this.products();
    return category ? products.filter(p => p.category === category) : products;
  })

  toggleCategory(category: ProductCategory) {
    this.selectedCategory.update(current => (current === category ? null : category))
  }
}
