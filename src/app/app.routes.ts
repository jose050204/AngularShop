import { Routes } from '@angular/router';
import { ProductList } from './features/products/product-list/product-list';
import { ProductDetail } from './features/products/product-detail/product-detail';

export const routes: Routes = [
    {
        path: '',
        component: ProductList
    },
    {
        path:'productos/:id',
        component: ProductDetail
    }
];
