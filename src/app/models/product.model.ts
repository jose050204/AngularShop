export type ProductCategory = 'verduras' | 'frutas' | 'zumos';


export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: ProductCategory
}