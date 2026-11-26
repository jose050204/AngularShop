import { Component } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ProductCard } from '../../../shared/components/product-card/product-card';

@Component({
  imports: [ProductCard],
  selector: 'app-product-list',
  styleUrl: './product-list.scss',
  templateUrl: './product-list.html',
})
export class ProductList {
  product: Product = {
    id:1,
    name: 'Pera',
    price: 5,
    image: 'images/products/Pera.png',
    category: 'frutas'
  }
}
