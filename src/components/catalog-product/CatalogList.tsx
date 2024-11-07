import React from 'react';
import Card from '../common/Card';
import { Catalog } from './interfaces';

interface CatalogListProps {
  catalogs: Catalog[];
  onEdit: (catalog: Catalog) => void;
}

const CatalogList: React.FC<CatalogListProps> = ({ catalogs, onEdit }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {catalogs.map((catalog) => (
        <Card
          key={catalog.id}
          title={catalog.name}
          description={catalog.description}
          extra={
            <button
              onClick={() => onEdit(catalog)}
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

export default CatalogList;
