import React from 'react';
import { Phone, Mail, Globe, Facebook, Instagram, User } from 'lucide-react';
import { Association } from '../types/Association';

interface AssociationCardProps {
  association: Association;
  onClick: () => void;
}

export function AssociationCard({ association, onClick }: AssociationCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Culturelle':
        return 'bg-purple-500';
      case 'Sportive':
        return 'bg-green-500';
      case 'Autre':
        return 'bg-orange-500';
      default:
        return 'bg-blue-500';
    }
  };

  const getCategoryImage = (category: string, nom: string) => {
    // Images thématiques pour les associations
    if (category === 'Culturelle') {
      if (nom.toLowerCase().includes('musique') || nom.toLowerCase().includes('banda')) {
        return 'https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=400';
      }
      if (nom.toLowerCase().includes('photo')) {
        return 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400';
      }
      if (nom.toLowerCase().includes('cercle') || nom.toLowerCase().includes('ouvrier')) {
        return 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400';
      }
      return 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400';
    }
    
    if (category === 'Sportive') {
      if (nom.toLowerCase().includes('football') || nom.toLowerCase().includes('sporting')) {
        return 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=400';
      }
      if (nom.toLowerCase().includes('handball') || nom.toLowerCase().includes('hand')) {
        return 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=400';
      }
      if (nom.toLowerCase().includes('judo') || nom.toLowerCase().includes('combat')) {
        return 'https://images.pexels.com/photos/7045715/pexels-photo-7045715.jpeg?auto=compress&cs=tinysrgb&w=400';
      }
      if (nom.toLowerCase().includes('danse')) {
        return 'https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=400';
      }
      if (nom.toLowerCase().includes('gym') || nom.toLowerCase().includes('pilates')) {
        return 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400';
      }
      if (nom.toLowerCase().includes('badminton')) {
        return 'https://images.pexels.com/photos/8007401/pexels-photo-8007401.jpeg?auto=compress&cs=tinysrgb&w=400';
      }
      return 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400';
    }
    
    // Catégorie "Autre"
    if (nom.toLowerCase().includes('pêche') || nom.toLowerCase().includes('truite')) {
      return 'https://images.pexels.com/photos/1123982/pexels-photo-1123982.jpeg?auto=compress&cs=tinysrgb&w=400';
    }
    if (nom.toLowerCase().includes('chasse')) {
      return 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=400';
    }
    if (nom.toLowerCase().includes('pompier')) {
      return 'https://images.pexels.com/photos/280076/pexels-photo-280076.jpeg?auto=compress&cs=tinysrgb&w=400';
    }
    if (nom.toLowerCase().includes('resto') || nom.toLowerCase().includes('cœur')) {
      return 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400';
    }
    return 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400';
  };
  const formatWebsite = (site: string) => {
    if (site.startsWith('http://') || site.startsWith('https://')) {
      return site;
    }
    return `https://${site}`;
  };

  const formatFacebookUrl = (facebook: string) => {
    if (facebook.startsWith('facebook.com') || facebook.startsWith('http')) {
      return facebook.startsWith('http') ? facebook : `https://${facebook}`;
    }
    return `https://facebook.com/${facebook}`;
  };

  const formatInstagramUrl = (instagram: string) => {
    if (instagram.startsWith('instagram.com') || instagram.startsWith('http')) {
      return instagram.startsWith('http') ? instagram : `https://${instagram}`;
    }
    return `https://instagram.com/${instagram}`;
  };

  return (
    <div 
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      {/* Image header */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={association.image}
          alt={association.nom}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <span
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white backdrop-blur-sm ${getCategoryColor(
            association.categorie
          )}`}
        >
          {association.categorie}
        </span>
      </div>

      {/* Header with category badge */}
      <div className="p-6 pb-4">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 leading-tight">
            {association.nom}
          </h3>
        </div>

        {/* Contact information */}
        <div className="space-y-3">
          {association.contact && (
            <div className="flex items-center text-gray-600">
              <User className="h-4 w-4 mr-3 text-gray-400 flex-shrink-0" />
              <span className="text-sm">{association.contact}</span>
            </div>
          )}

          {association.telephone && (
            <div className="flex items-center text-gray-600">
              <Phone className="h-4 w-4 mr-3 text-gray-400 flex-shrink-0" />
              <a
                href={`tel:${association.telephone}`}
                className="text-sm hover:text-blue-600 transition-colors duration-200"
              >
                {association.telephone}
              </a>
            </div>
          )}

          {association.email && (
            <div className="flex items-center text-gray-600">
              <Mail className="h-4 w-4 mr-3 text-gray-400 flex-shrink-0" />
              <a
                href={`mailto:${association.email}`}
                className="text-sm hover:text-blue-600 transition-colors duration-200 break-all"
              >
                {association.email}
              </a>
            </div>
          )}

          {association.site && (
            <div className="flex items-center text-gray-600">
              <Globe className="h-4 w-4 mr-3 text-gray-400 flex-shrink-0" />
              <a
                href={formatWebsite(association.site)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-blue-600 transition-colors duration-200 break-all"
              >
                {association.site}
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Social networks */}
      {(association.reseaux.facebook || association.reseaux.instagram) && (
        <div className="px-6 pb-6">
          <div className="flex gap-3 pt-3 border-t border-gray-100">
            {association.reseaux.facebook && (
              <a
                href={formatFacebookUrl(association.reseaux.facebook)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 transform hover:scale-110"
                title="Page Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            )}

            {association.reseaux.instagram && (
              <a
                href={formatInstagramUrl(association.reseaux.instagram)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-110"
                title="Page Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}