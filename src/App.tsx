// src/App.tsx
import React, { useEffect, useState } from 'react';
import CrudCatalog from './components/catalog-product/CrudCatalog';
import CrudProduct from './components/catalog-product/CrudProduct';
import catalogsData from './data/catalogs.json';

const App = () => {
  const [catalogs, setCatalogs] = useState<any[]>([]);
  const [selectedCatalogId, setSelectedCatalogId] = useState<number | null>(null);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    setCatalogs(catalogsData);
  }, []);

  useEffect(() => {
    if (selectedCatalogId !== null) {
      const selectedCatalog = catalogs.find((catalog) => catalog.id === selectedCatalogId);
      setProducts(selectedCatalog ? selectedCatalog.products : []);
    }
  }, [selectedCatalogId, catalogs]);

  const handleSaveCatalogs = (updatedCatalogs: any[]) => {
    setCatalogs(updatedCatalogs);
  };

  const handleSaveProducts = (updatedProducts: any[]) => {
    setProducts(updatedProducts);
    // Actualiza también los productos en el catálogo seleccionado
    setCatalogs((prevCatalogs) =>
      prevCatalogs.map((catalog) =>
        catalog.id === selectedCatalogId ? { ...catalog, products: updatedProducts } : catalog
      )
    );
  };

  const handleSelectCatalog = (catalogId: number) => {
    setSelectedCatalogId(catalogId);
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-center py-6">Gestión de Catálogos y Productos</h1>

      <div className="container mx-auto p-4">
        <CrudCatalog initialCatalogs={catalogs} onSave={handleSaveCatalogs} />
        {selectedCatalogId && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Productos en el catálogo seleccionado
            </h2>
            <CrudProduct initialProducts={products} onSave={handleSaveProducts} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
