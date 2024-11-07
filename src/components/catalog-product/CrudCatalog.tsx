
import React, { useState, useEffect } from 'react';
import CatalogList from './CatalogList';
import Form from '../common/Form';
import { Catalog, Product } from './interfaces';
import OrderManager from './OrderManager';

interface CrudCatalogProps {
  initialCatalogs: Catalog[];
  onSave: (catalogs: Catalog[]) => void;
  onDelete: (catalogId: number) => void;
}

const CrudCatalog: React.FC<CrudCatalogProps> = ({ initialCatalogs, onSave, onDelete }) => {
  const [catalogs, setCatalogs] = useState<Catalog[]>(initialCatalogs);
  const [editingCatalog, setEditingCatalog] = useState<Catalog | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const handleEdit = (catalog: Catalog) => {
    setEditingCatalog(catalog);
  };

  const handleSave = (updatedCatalog: Catalog) => {
    const updatedCatalogs = catalogs.map((cat) =>
      cat.id === updatedCatalog.id ? updatedCatalog : cat
    );
    setCatalogs(updatedCatalogs);
    onSave(updatedCatalogs);
    setEditingCatalog(null);
  };

  const handleAdd = (newCatalog: Catalog) => {
    const newCatalogs = [...catalogs, { ...newCatalog, id: catalogs.length + 1 }];
    setCatalogs(newCatalogs);
    onSave(newCatalogs);
    setEditingCatalog(null);
  };

  const handleDelete = (catalogId: number) => {
    const updatedCatalogs = catalogs.filter((catalog) => catalog.id !== catalogId);
    setCatalogs(updatedCatalogs);
    onSave(updatedCatalogs);
    onDelete(catalogId);
  };

  const handleAddToOrder = (catalog: Catalog) => {
    setSelectedProducts((prevProducts) => [
      ...prevProducts,
      ...catalog.products,
    ]);
  };

  const handleRemoveProductFromOrder = (productId: number) => {
    const updatedProducts = selectedProducts.filter((product) => product.id !== productId);
    setSelectedProducts(updatedProducts);
  };

  useEffect(() => {
    console.log('Productos en el pedido:', selectedProducts);
  }, [selectedProducts]);

  return (
    <div className="text-black max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-black">Gestión de Catálogos</h2>
      <CatalogList 
        catalogs={catalogs} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
        onAddToOrder={handleAddToOrder} 
      />
      <button
        onClick={() =>
          setEditingCatalog({ id: 0, name: '', description: '', products: [] })
        }
        className="bg-green-500 text-white p-2 rounded my-4"
      >
        Crear Nuevo Catálogo
      </button>
      {editingCatalog && (
        <Form
          initialValues={editingCatalog}
          fields={[
            { name: 'name', label: 'Nombre', type: 'text' },
            { name: 'description', label: 'Descripción', type: 'text' },
          ]}
          onSubmit={(values) =>
            editingCatalog.id === 0
              ? handleAdd({ ...values, products: [] })
              : handleSave(values as Catalog)
          }
          onCancel={() => setEditingCatalog(null)}
        />
      )}
 
      <OrderManager 
        selectedProducts={selectedProducts} 
        onAddProduct={(product) => setSelectedProducts([...selectedProducts, product])}
        onRemoveProduct={handleRemoveProductFromOrder}
      />
    </div>
  );
};

export default CrudCatalog;
