import { Component, input } from '@angular/core';
import { Product } from '../../../models/product.model';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-product-card',
  styleUrl: './product-card.scss',
  templateUrl: './product-card.html',
})
export class ProductCard {
  product = input.required<Product>();
}
