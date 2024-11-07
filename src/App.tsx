// src/App.tsx
import React, { useEffect, useState } from 'react';
import CrudCatalog from './components/catalog-product/CrudCatalog';
import CrudProduct from './components/catalog-product/CrudProduct';
import catalogsData from './data/catalogs.json';
import { Catalog, Product } from './components/catalog-product/interfaces';
import OrderManager from './components/catalog-product/OrderManager';

const App = () => {
  const [catalogs, setCatalogs] = useState<Catalog[]>([]);
  const [selectedCatalogId, setSelectedCatalogId] = useState<number | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [order, setOrder] = useState<Product[]>([]); // Estado para los productos en el pedido

  useEffect(() => {
    setCatalogs(catalogsData);
  }, []);

  useEffect(() => {
    if (selectedCatalogId !== null) {
      const selectedCatalog = catalogs.find((catalog) => catalog.id === selectedCatalogId);
      setProducts(selectedCatalog ? selectedCatalog.products : []);
    }
  }, [selectedCatalogId, catalogs]);

  const handleSaveCatalogs = (updatedCatalogs: Catalog[]) => {
    setCatalogs(updatedCatalogs);
  };

  const handleDeleteCatalog = (catalogId: number) => {
    const updatedCatalogs = catalogs.filter((catalog) => catalog.id !== catalogId);
    setCatalogs(updatedCatalogs);
    setSelectedCatalogId(null);
    setProducts([]);
  };

  const handleSaveProducts = (updatedProducts: Product[]) => {
    setProducts(updatedProducts);
    setCatalogs((prevCatalogs) =>
      prevCatalogs.map((catalog) =>
        catalog.id === selectedCatalogId ? { ...catalog, products: updatedProducts } : catalog
      )
    );
  };

  const handleSelectCatalog = (catalogId: number) => {
    setSelectedCatalogId(catalogId);
  };

  const handleAddProductToOrder = (product: Product) => {
    setOrder((prevOrder) => [...prevOrder, product]);
    console.log('Pedido actualizado:', order); 
  };

  const handleRemoveProductFromOrder = (productId: number) => {
    setOrder((prevOrder) => prevOrder.filter((product) => product.id !== productId)); 
    console.log('Pedido actualizado:', order);
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-center py-6">Gestión de Catálogos y Productos</h1>

      <div className="container mx-auto p-4">
        <CrudCatalog
          initialCatalogs={catalogs}
          onSave={handleSaveCatalogs}
          onDelete={handleDeleteCatalog}
        />
        {selectedCatalogId && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Productos en el catálogo seleccionado
            </h2>
            <CrudProduct initialProducts={products} onSave={handleSaveProducts} />
          </>
        )}
        <h2 className="text-2xl font-semibold mt-8 mb-4">Gestionar Pedido</h2>
        <OrderManager
          selectedProducts={order}
          onAddProduct={handleAddProductToOrder}
          onRemoveProduct={handleRemoveProductFromOrder}
        />
      </div>
    </div>
  );
};

export default App;
