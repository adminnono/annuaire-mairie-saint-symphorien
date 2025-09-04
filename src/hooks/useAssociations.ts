import { useState, useMemo } from 'react';
import { associations } from '../data/associations';
import { Association } from '../types/Association';

export function useAssociations() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    return Array.from(new Set(associations.map(assoc => assoc.categorie))).sort();
  }, []);

  const filteredAssociations = useMemo(() => {
    return associations.filter((association) => {
      const matchesSearch = searchTerm === '' || 
        association.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (association.contact && association.contact.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (association.email && association.email.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = selectedCategory === null || association.categorie === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    categories,
    filteredAssociations,
    totalCount: associations.length
  };
}