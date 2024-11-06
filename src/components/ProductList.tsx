import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Productos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white text-black p-4 rounded shadow-md">
            <h3 className="font-semibold text-black">{product.name}</h3>
            <p>{product.description}</p>
            <p className="text-lg font-bold text-black">${product.price}</p>
            <p className="text-sm text-black">Stock: {product.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
