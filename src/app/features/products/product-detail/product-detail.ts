import { Component, computed, inject, input } from '@angular/core';
import { Products } from '../../../core/services/products';

@Component({
  imports: [],
  selector: 'app-product-detail',
  styleUrl: './product-detail.scss',
  templateUrl: './product-detail.html',
})
export class ProductDetail {
  readonly id = input.required<string>();

  private readonly productsService = inject(Products);

  readonly product = computed(() => this.productsService.getById(Number(this.id())))
}
