import React from 'react';
import { Product } from '../catalog-product/interfaces';

interface OrderManagerProps {
  selectedProducts: Product[];
  onAddProduct: (product: Product) => void;
  onRemoveProduct: (productId: number) => void;
}

const OrderManager: React.FC<OrderManagerProps> = ({
  selectedProducts,
  onAddProduct,
  onRemoveProduct,
}) => {
  const handleAddProductToOrder = () => {
    const newProduct: Product = {
      id: 1000, 
      name: 'Nuevo Producto', 
      description: 'Descripción del producto',
      price: 50, 
      stock: 100,
    };

    onAddProduct(newProduct);
  };

  return (
    <div className="mt-4">
      <h3 className="text-xl font-bold">Productos en el Pedido</h3>
      <ul>
        {selectedProducts.length === 0 ? (
          <p>No hay productos en el pedido.</p>
        ) : (
          selectedProducts.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price.toFixed(2)}
              <button
                onClick={() => onRemoveProduct(product.id)}
                className="ml-2 text-red-500"
              >
                Eliminar
              </button>
            </li>
          ))
        )}
      </ul>
      <button
        onClick={handleAddProductToOrder}
        className="mt-4 bg-green-500 text-white p-2 rounded"
      >
        Prueba al Pedido
      </button>
    </div>
  );
};

export default OrderManager;
