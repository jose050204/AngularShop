import { Service, signal } from '@angular/core';
import { Product } from '../../models/product.model';

@Service()
export class Products {
    readonly products = signal<Product[]>([
        { id: 1, name: 'Pera', price: 5, image: 'images/products/Pera.jpg', category: 'frutas' },
        { id: 2, name: 'Espárrago', price: 10, image: 'images/products/Esparrago.jpg', category: 'verduras' },
        { id: 3, name: 'Cebolla', price: 11, image: 'images/products/Cebolla.jpg', category: 'verduras' },
        { id: 4, name: 'Limón', price: 4, image: 'images/products/Limon.jpg', category: 'frutas' },
        { id: 5, name: 'Plátano', price: 8, image: 'images/products/Platano.jpg', category: 'frutas' },
        { id: 6, name: 'Zumo de naranja', price: 13, image: 'images/products/Zumo-naranja.jpg', category: 'zumos' },
    ]).asReadonly()

    getById(id: number) {
        return this.products().find(p => p.id === id)
    }
}
