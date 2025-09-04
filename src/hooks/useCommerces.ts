import { useState, useMemo } from 'react';
import { commerces } from '../data/commerces';

export function useCommerces() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    return Array.from(new Set(commerces.map(commerce => commerce.categorie))).sort();
  }, []);

  const filteredCommerces = useMemo(() => {
    return commerces.filter((commerce) => {
      const matchesSearch = searchTerm === '' || 
        commerce.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (commerce.contact && commerce.contact.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (commerce.email && commerce.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (commerce.adresse && commerce.adresse.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = selectedCategory === null || commerce.categorie === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    categories,
    filteredCommerces,
    totalCount: commerces.length
  };
}