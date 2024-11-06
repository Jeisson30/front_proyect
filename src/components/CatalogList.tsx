import React from 'react';

interface Catalog {
  id: number;
  name: string;
  description: string;
}

interface CatalogListProps {
  catalogs: Catalog[];
  onSelectCatalog: (catalogId: number) => void;
}

const CatalogList: React.FC<CatalogListProps> = ({ catalogs, onSelectCatalog }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Catálogos</h2>
      <div className="space-y-4">
        {catalogs.map((catalog) => (
          <div
            key={catalog.id}
            onClick={() => onSelectCatalog(catalog.id)}
            className="cursor-pointer bg-white text-black p-4 rounded shadow-md hover:bg-black-100"
          >
            <h3 className="font-semibold">{catalog.name}</h3>
            <p>{catalog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogList;
