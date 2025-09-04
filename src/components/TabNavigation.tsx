import React from 'react';
import { Users, Store } from 'lucide-react';

interface TabNavigationProps {
  activeTab: 'associations' | 'commerces';
  onTabChange: (tab: 'associations' | 'commerces') => void;
  associationsCount: number;
  commercesCount: number;
}

export function TabNavigation({ 
  activeTab, 
  onTabChange, 
  associationsCount, 
  commercesCount 
}: TabNavigationProps) {
  return (
    <div className="flex justify-center mb-8">
      <div className="bg-white rounded-2xl shadow-lg p-2 border border-gray-200">
        <div className="flex space-x-2">
          <button
            onClick={() => onTabChange('associations')}
            className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
              activeTab === 'associations'
                ? 'bg-blue-500 text-white shadow-md'
                : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
            }`}
          >
            <Users className="h-5 w-5 mr-2" />
            Associations
            <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
              activeTab === 'associations'
                ? 'bg-blue-400 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}>
              {associationsCount}
            </span>
          </button>
          
          <button
            onClick={() => onTabChange('commerces')}
            className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
              activeTab === 'commerces'
                ? 'bg-teal-500 text-white shadow-md'
                : 'text-gray-600 hover:text-teal-600 hover:bg-teal-50'
            }`}
          >
            <Store className="h-5 w-5 mr-2" />
            Commerces & Artisans
            <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
              activeTab === 'commerces'
                ? 'bg-teal-400 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}>
              {commercesCount}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}