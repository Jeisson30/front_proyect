// src/App.tsx
import React, { useEffect, useState } from 'react';
import CatalogList from './components/CatalogList';
import ProductList from './components/ProductList';
import catalogsData from './data/catalogs.json';
import ordersData from './data/orders.json';

const App = () => {
  const [catalogs, setCatalogs] = useState<any[]>([]);
  const [selectedCatalogId, setSelectedCatalogId] = useState<number | null>(null);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    setCatalogs(catalogsData);
  }, []);

  useEffect(() => {
    if (selectedCatalogId !== null) {
      const selectedCatalog = catalogs.find(
        (catalog) => catalog.id === selectedCatalogId
      );
      setProducts(selectedCatalog ? selectedCatalog.products : []);
    }
  }, [selectedCatalogId, catalogs]);

  const handleSelectCatalog = (catalogId: number) => {
    setSelectedCatalogId(catalogId);
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-center py-6">Gestión de Catálogos y Productos</h1>

      <div className="container mx-auto p-4">
        <CatalogList catalogs={catalogs} onSelectCatalog={handleSelectCatalog} />
        {selectedCatalogId && <ProductList products={products} />}
      </div>
    </div>
  );
};

export default App;
