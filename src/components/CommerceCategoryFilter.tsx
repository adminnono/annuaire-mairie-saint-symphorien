import React from 'react';
import { Commerce } from '../types/Commerce';

interface CommerceCategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  commerces: Commerce[];
}

export function CommerceCategoryFilter({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  commerces 
}: CommerceCategoryFilterProps) {
  const getCategoryCount = (category: string | null) => {
    if (category === null) return commerces.length;
    return commerces.filter(commerce => commerce.categorie === category).length;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Boulangerie - Pâtisserie': 'bg-amber-100 text-amber-800 hover:bg-amber-200 border-amber-200',
      'Alimentation': 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-emerald-200',
      'Services': 'bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-200',
      'Tabac Presse': 'bg-gray-100 text-gray-800 hover:bg-gray-200 border-gray-200',
      'Coiffure': 'bg-pink-100 text-pink-800 hover:bg-pink-200 border-pink-200',
      'Institut de Beauté': 'bg-rose-100 text-rose-800 hover:bg-rose-200 border-rose-200',
      'Fleuriste': 'bg-green-100 text-green-800 hover:bg-green-200 border-green-200',
      'Restauration': 'bg-red-100 text-red-800 hover:bg-red-200 border-red-200',
      'Commerce Ambulant': 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-yellow-200',
      'Bar': 'bg-purple-100 text-purple-800 hover:bg-purple-200 border-purple-200',
      'Espaces Verts': 'bg-lime-100 text-lime-800 hover:bg-lime-200 border-lime-200',
      'Garage': 'bg-slate-100 text-slate-800 hover:bg-slate-200 border-slate-200',
      'Contrôle Technique': 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200 border-indigo-200',
      'Maçonnerie': 'bg-stone-100 text-stone-800 hover:bg-stone-200 border-stone-200',
      'Plomberie': 'bg-cyan-100 text-cyan-800 hover:bg-cyan-200 border-cyan-200',
      'Ebénisterie': 'bg-orange-100 text-orange-800 hover:bg-orange-200 border-orange-200',
      'Charpente': 'bg-teal-100 text-teal-800 hover:bg-teal-200 border-teal-200',
      'Carreleur': 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200 border-neutral-200',
      'Electricité': 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-yellow-200',
      'Antenniste': 'bg-violet-100 text-violet-800 hover:bg-violet-200 border-violet-200',
      'Piscines': 'bg-sky-100 text-sky-800 hover:bg-sky-200 border-sky-200',
      'Peinture': 'bg-fuchsia-100 text-fuchsia-800 hover:bg-fuchsia-200 border-fuchsia-200',
      'Ramonage': 'bg-red-100 text-red-800 hover:bg-red-200 border-red-200',
      'Atelier': 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200 border-indigo-200',
      'Entreprise Locale': 'bg-gray-100 text-gray-800 hover:bg-gray-200 border-gray-200',
      'Artisan d\'Art': 'bg-amber-100 text-amber-800 hover:bg-amber-200 border-amber-200'
    };
    return colors[category as keyof typeof colors] || 'bg-teal-100 text-teal-800 hover:bg-teal-200 border-teal-200';
  };

  const getSelectedCategoryColor = (category: string) => {
    const colors = {
      'Boulangerie - Pâtisserie': 'bg-amber-500 text-white border-amber-500',
      'Alimentation': 'bg-emerald-500 text-white border-emerald-500',
      'Services': 'bg-blue-500 text-white border-blue-500',
      'Tabac Presse': 'bg-gray-500 text-white border-gray-500',
      'Coiffure': 'bg-pink-500 text-white border-pink-500',
      'Institut de Beauté': 'bg-rose-500 text-white border-rose-500',
      'Fleuriste': 'bg-green-500 text-white border-green-500',
      'Restauration': 'bg-red-500 text-white border-red-500',
      'Commerce Ambulant': 'bg-yellow-500 text-white border-yellow-500',
      'Bar': 'bg-purple-500 text-white border-purple-500',
      'Espaces Verts': 'bg-lime-500 text-white border-lime-500',
      'Garage': 'bg-slate-500 text-white border-slate-500',
      'Contrôle Technique': 'bg-indigo-500 text-white border-indigo-500',
      'Maçonnerie': 'bg-stone-500 text-white border-stone-500',
      'Plomberie': 'bg-cyan-500 text-white border-cyan-500',
      'Ebénisterie': 'bg-orange-500 text-white border-orange-500',
      'Charpente': 'bg-teal-500 text-white border-teal-500',
      'Carreleur': 'bg-neutral-500 text-white border-neutral-500',
      'Electricité': 'bg-yellow-600 text-white border-yellow-600',
      'Antenniste': 'bg-violet-500 text-white border-violet-500',
      'Piscines': 'bg-sky-500 text-white border-sky-500',
      'Peinture': 'bg-fuchsia-500 text-white border-fuchsia-500',
      'Ramonage': 'bg-red-600 text-white border-red-600',
      'Atelier': 'bg-indigo-600 text-white border-indigo-600',
      'Entreprise Locale': 'bg-gray-600 text-white border-gray-600',
      'Artisan d\'Art': 'bg-amber-600 text-white border-amber-600'
    };
    return colors[category as keyof typeof colors] || 'bg-teal-500 text-white border-teal-500';
  };

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <button
        onClick={() => onCategoryChange(null)}
        className={`px-4 py-2 rounded-full border-2 font-medium transition-all duration-200 transform hover:scale-105 text-sm ${
          selectedCategory === null
            ? 'bg-teal-500 text-white border-teal-500'
            : 'bg-teal-100 text-teal-800 hover:bg-teal-200 border-teal-200'
        }`}
      >
        Tous ({getCategoryCount(null)})
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full border-2 font-medium transition-all duration-200 transform hover:scale-105 text-sm ${
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