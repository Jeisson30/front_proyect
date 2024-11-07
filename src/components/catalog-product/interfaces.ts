export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
  }
  
  export interface Catalog {
    id: number;
    name: string;
    description: string;
    products: Product[];
  }
  