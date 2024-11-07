import catalogsData from '../data/catalogs.json';
import ordersData from '../data/orders.json';
import { Catalog, Product } from '../components/catalog-product/interfaces';

let catalogs = [...catalogsData];

export const getCatalogs = (): Catalog[] => catalogs;

export const createCatalog = (newCatalog: Catalog): void => {
  catalogs.push(newCatalog);
};

export const updateCatalog = (updatedCatalog: Catalog): void => {
  catalogs = catalogs.map((catalog) => (catalog.id === updatedCatalog.id ? updatedCatalog : catalog));
};

export const deleteCatalog = (catalogId: number): void => {
  catalogs = catalogs.filter((catalog) => catalog.id !== catalogId);
};

export const getProductsByCatalogId = (catalogId: number): Product[] => {
  const catalog = catalogs.find((catalog) => catalog.id === catalogId);
  return catalog ? catalog.products : [];
};

export const updateProducts = (catalogId: number, updatedProducts: Product[]): void => {
  catalogs = catalogs.map((catalog) =>
    catalog.id === catalogId ? { ...catalog, products: updatedProducts } : catalog
  );
};
