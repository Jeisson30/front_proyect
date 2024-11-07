import React from 'react';
import Card from '../common/Card';
import { Product } from './interfaces';

interface ProductListProps {
  products: Product[];
  onEdit: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onEdit }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <Card
          key={product.id}
          title={product.name}
          description={`$${product.price.toFixed(2)} - ${product.description}`}
          extra={
            <button
              onClick={() => onEdit(product)}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Editar
            </button>
          }
        />
      ))}
    </div>
  );
};

export default ProductList;
