import React from 'react';
import { CommerceCard } from './CommerceCard';
import { Commerce } from '../types/Commerce';

interface CommercesGridProps {
  commerces: Commerce[];
  searchTerm: string;
  selectedCategory: string | null;
  onCommerceClick: (commerce: Commerce) => void;
}

export function CommercesGrid({ commerces, searchTerm, selectedCategory, onCommerceClick }: CommercesGridProps) {
  if (commerces.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🏪</div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          Aucun commerce trouvé
        </h3>
        <p className="text-gray-500">
          {searchTerm || selectedCategory
            ? 'Essayez de modifier votre recherche ou vos filtres'
            : 'Aucun commerce disponible pour le moment'}
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="text-center mb-8">
        <p className="text-lg text-gray-600">
          <span className="font-semibold text-gray-800">{commerces.length}</span>{' '}
          commerce{commerces.length > 1 ? 's' : ''} trouvé{commerces.length > 1 ? 's' : ''}
          {selectedCategory && (
            <span className="text-gray-500"> • Catégorie : {selectedCategory}</span>
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {commerces.map((commerce, index) => (
          <div
            key={`${commerce.nom}-${index}`}
            className="animate-fadeIn"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <CommerceCard 
              commerce={commerce} 
              onClick={() => onCommerceClick(commerce)}
            />
          </div>
        ))}
      </div>
    </>
  );
}