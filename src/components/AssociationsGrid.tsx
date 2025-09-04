import React from 'react';
import { AssociationCard } from './AssociationCard';
import { Association } from '../types/Association';

interface AssociationsGridProps {
  associations: Association[];
  searchTerm: string;
  selectedCategory: string | null;
  onAssociationClick: (association: Association) => void;
}

export function AssociationsGrid({ associations, searchTerm, selectedCategory, onAssociationClick }: AssociationsGridProps) {
  if (associations.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          Aucune association trouvée
        </h3>
        <p className="text-gray-500">
          {searchTerm || selectedCategory
            ? 'Essayez de modifier votre recherche ou vos filtres'
            : 'Aucune association disponible pour le moment'}
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="text-center mb-8">
        <p className="text-lg text-gray-600">
          <span className="font-semibold text-gray-800">{associations.length}</span>{' '}
          association{associations.length > 1 ? 's' : ''} trouvée{associations.length > 1 ? 's' : ''}
          {selectedCategory && (
            <span className="text-gray-500"> • Catégorie : {selectedCategory}</span>
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {associations.map((association, index) => (
          <div
            key={`${association.nom}-${index}`}
            className="animate-fadeIn"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <AssociationCard 
              association={association} 
              onClick={() => onAssociationClick(association)}
            />
          </div>
        ))}
      </div>
    </>
  );
}