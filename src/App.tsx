import React from 'react';
import { useState } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { CategoryFilter } from './components/CategoryFilter';
import { CommerceCategoryFilter } from './components/CommerceCategoryFilter';
import { AssociationsGrid } from './components/AssociationsGrid';
import { CommercesGrid } from './components/CommercesGrid';
import { TabNavigation } from './components/TabNavigation';
import { Modal } from './components/Modal';
import { AssociationDetail } from './components/AssociationDetail';
import { CommerceDetail } from './components/CommerceDetail';
import { useAssociations } from './hooks/useAssociations';
import { useCommerces } from './hooks/useCommerces';
import { Association } from './types/Association';
import { Commerce } from './types/Commerce';

function App() {
  const [activeTab, setActiveTab] = useState<'associations' | 'commerces'>('associations');
  const [selectedAssociation, setSelectedAssociation] = useState<Association | null>(null);
  const [selectedCommerce, setSelectedCommerce] = useState<Commerce | null>(null);

  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    categories,
    filteredAssociations,
    totalCount
  } = useAssociations();

  const {
    searchTerm: commerceSearchTerm,
    setSearchTerm: setCommerceSearchTerm,
    selectedCategory: commerceSelectedCategory,
    setSelectedCategory: setCommerceSelectedCategory,
    categories: commerceCategories,
    filteredCommerces,
    totalCount: commercesTotalCount
  } = useCommerces();

  const currentSearchTerm = activeTab === 'associations' ? searchTerm : commerceSearchTerm;
  const setCurrentSearchTerm = activeTab === 'associations' ? setSearchTerm : setCommerceSearchTerm;

  const handleAssociationClick = (association: Association) => {
    setSelectedAssociation(association);
  };

  const handleCommerceClick = (commerce: Commerce) => {
    setSelectedCommerce(commerce);
  };

  const closeModal = () => {
    setSelectedAssociation(null);
    setSelectedCommerce(null);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tab Navigation */}
        <TabNavigation
          activeTab={activeTab}
          onTabChange={setActiveTab}
          associationsCount={totalCount}
          commercesCount={commercesTotalCount}
        />

        {/* Search and Filter Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12 border border-gray-100">
          <div className="space-y-8">
            {/* Search Bar */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {activeTab === 'associations' ? 'Rechercher une association' : 'Rechercher un commerce'}
              </h2>
              <SearchBar 
                searchTerm={currentSearchTerm} 
                onSearchChange={setCurrentSearchTerm} 
              />
            </div>

            {/* Category Filters */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Filtrer par catégorie
              </h3>
              {activeTab === 'associations' ? (
                <CategoryFilter
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  associations={filteredAssociations}
                />
              ) : (
                <CommerceCategoryFilter
                  categories={commerceCategories}
                  selectedCategory={commerceSelectedCategory}
                  onCategoryChange={setCommerceSelectedCategory}
                  commerces={filteredCommerces}
                />
              )}
            </div>
          </div>
        </div>

        {/* Results Section */}
        <section>
          {activeTab === 'associations' ? (
            <AssociationsGrid
              associations={filteredAssociations}
              searchTerm={searchTerm}
              selectedCategory={selectedCategory}
              onAssociationClick={handleAssociationClick}
            />
          ) : (
            <CommercesGrid
              commerces={filteredCommerces}
              searchTerm={commerceSearchTerm}
              selectedCategory={commerceSelectedCategory}
              onCommerceClick={handleCommerceClick}
            />
          )}
        </section>
      </main>

      {/* Modals */}
      <Modal isOpen={!!selectedAssociation} onClose={closeModal}>
        {selectedAssociation && (
          <AssociationDetail association={selectedAssociation} />
        )}
      </Modal>

      <Modal isOpen={!!selectedCommerce} onClose={closeModal}>
        {selectedCommerce && (
          <CommerceDetail commerce={selectedCommerce} />
        )}
      </Modal>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            © 2025 Mairie de Saint-Symphorien • Annuaire Local
          </p>
          <p className="text-gray-400 text-sm mt-2">
            {totalCount} associations • {commercesTotalCount} commerces et artisans
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;