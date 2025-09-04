import React from 'react';
import { Association } from '../types/Association';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  associations: Association[];
}

export function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  associations 
}: CategoryFilterProps) {
  const getCategoryCount = (category: string | null) => {
    if (category === null) return associations.length;
    return associations.filter(assoc => assoc.categorie === category).length;
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Culturelle':
        return 'bg-purple-100 text-purple-800 hover:bg-purple-200 border-purple-200';
      case 'Sportive':
        return 'bg-green-100 text-green-800 hover:bg-green-200 border-green-200';
      case 'Autre':
        return 'bg-orange-100 text-orange-800 hover:bg-orange-200 border-orange-200';
      default:
        return 'bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-200';
    }
  };

  const getSelectedCategoryColor = (category: string) => {
    switch (category) {
      case 'Culturelle':
        return 'bg-purple-500 text-white border-purple-500';
      case 'Sportive':
        return 'bg-green-500 text-white border-green-500';
      case 'Autre':
        return 'bg-orange-500 text-white border-orange-500';
      default:
        return 'bg-blue-500 text-white border-blue-500';
    }
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <button
        onClick={() => onCategoryChange(null)}
        className={`px-6 py-2 rounded-full border-2 font-medium transition-all duration-200 transform hover:scale-105 ${
          selectedCategory === null
            ? 'bg-blue-500 text-white border-blue-500'
            : 'bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-200'
        }`}
      >
        Toutes ({getCategoryCount(null)})
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2 rounded-full border-2 font-medium transition-all duration-200 transform hover:scale-105 ${
            selectedCategory === category
              ? getSelectedCategoryColor(category)
              : getCategoryColor(category)
          }`}
        >
          {category} ({getCategoryCount(category)})
        </button>
      ))}
    </div>
  );
}