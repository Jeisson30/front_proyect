import React, { useState } from 'react';
import ProductList from './ProductList';
import Form from '../common/Form';
import { Product } from './interfaces';

interface CrudProductProps {
  initialProducts: Product[];
  onSave: (products: Product[]) => void;
}

const CrudProduct: React.FC<CrudProductProps> = ({ initialProducts, onSave }) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
  };

  const handleSave = (updatedProduct: Product) => {
    const updatedProducts = products.map((prod) =>
      prod.id === updatedProduct.id ? updatedProduct : prod
    );
    setProducts(updatedProducts);
    onSave(updatedProducts);
    setEditingProduct(null);
  };

  const handleAdd = (newProduct: Product) => {
    const newProducts = [...products, { ...newProduct, id: products.length + 1 }];
    setProducts(newProducts);
    onSave(newProducts);
    setEditingProduct(null);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Gestión de Productos</h2>
      <ProductList products={products} onEdit={handleEdit} />
      <button
        onClick={() =>
          setEditingProduct({ id: 0, name: '', description: '', price: 0, stock: 0 })
        }
        className="bg-green-500 text-white p-2 rounded my-4"
      >
        Crear Nuevo Producto
      </button>
      {editingProduct && (
        <Form
          initialValues={editingProduct}
          fields={[
            { name: 'name', label: 'Nombre', type: 'text' },
            { name: 'description', label: 'Descripción', type: 'text' },
            { name: 'price', label: 'Precio', type: 'number' },
            { name: 'stock', label: 'Inventario', type: 'number' },
          ]}
          onSubmit={(values) =>
            editingProduct.id === 0
              ? handleAdd(values as Product)
              : handleSave(values as Product)
          }
          onCancel={() => setEditingProduct(null)}
        />
      )}
    </div>
  );
};

export default CrudProduct;
