export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: 'verduras' | 'frutas' | 'zumos'
}