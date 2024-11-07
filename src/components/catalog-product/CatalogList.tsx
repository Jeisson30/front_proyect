import React from 'react';
import { Catalog } from './interfaces';

interface CatalogListProps {
  catalogs: Catalog[];
  onEdit: (catalog: Catalog) => void;
  onDelete: (catalogId: number) => void;
}

const CatalogList: React.FC<CatalogListProps> = ({ catalogs, onEdit, onDelete }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {catalogs.map((catalog) => (
        <div
          key={catalog.id}
          className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white w-full"
        >
          <h3 className="text-xl font-semibold text-black">{catalog.name}</h3>
          <p className="text-black mb-4">{catalog.description}</p>
          <button
            onClick={() => onEdit(catalog)}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Editar
          </button>
          <button
            onClick={() => onDelete(catalog.id)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
};

export default CatalogList;
