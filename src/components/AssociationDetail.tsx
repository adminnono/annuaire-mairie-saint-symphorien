import React from 'react';
import { Phone, Mail, Globe, Facebook, Instagram, User, Users, Calendar, MapPin } from 'lucide-react';
import { Association } from '../types/Association';

interface AssociationDetailProps {
  association: Association;
}

export function AssociationDetail({ association }: AssociationDetailProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Culturelle':
        return 'from-purple-500 to-purple-600';
      case 'Sportive':
        return 'from-green-500 to-green-600';
      case 'Autre':
        return 'from-orange-500 to-orange-600';
      default:
        return 'from-blue-500 to-blue-600';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Culturelle':
        return '🎭';
      case 'Sportive':
        return '⚽';
      case 'Autre':
        return '🤝';
      default:
        return '🏛️';
    }
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
    <div className="bg-white">
      {/* Hero Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={association.image}
          alt={association.nom}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Category Badge */}
        <div className={`absolute top-6 left-6 px-4 py-2 rounded-full bg-gradient-to-r ${getCategoryColor(association.categorie)} text-white font-semibold shadow-lg backdrop-blur-sm`}>
          <span className="mr-2">{getCategoryIcon(association.categorie)}</span>
          {association.categorie}
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-6 left-6 right-6">
          <h1 className="text-3xl font-bold text-white mb-2 leading-tight">
            {association.nom}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Description Section */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Users className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">À propos de l'association</h2>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <p className="text-gray-700 leading-relaxed">
              {association.categorie === 'Culturelle' && 
                "Cette association contribue à l'enrichissement culturel de notre commune en proposant des activités artistiques et créatives pour tous les âges."
              }
              {association.categorie === 'Sportive' && 
                "Cette association sportive offre un cadre convivial pour la pratique d'activités physiques et le développement de l'esprit d'équipe."
              }
              {association.categorie === 'Autre' && 
                "Cette association joue un rôle important dans la vie sociale et communautaire de Saint-Symphorien."
              }
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Phone className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Informations de contact</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {association.contact && (
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center text-gray-600 mb-2">
                  <User className="h-5 w-5 mr-3 text-gray-400" />
                  <span className="font-medium text-gray-800">Contact</span>
                </div>
                <p className="text-gray-700 ml-8">{association.contact}</p>
              </div>
            )}

            {association.telephone && (
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center text-gray-600 mb-2">
                  <Phone className="h-5 w-5 mr-3 text-gray-400" />
                  <span className="font-medium text-gray-800">Téléphone</span>
                </div>
                <a
                  href={`tel:${association.telephone}`}
                  className="text-blue-600 hover:text-blue-700 transition-colors duration-200 ml-8 font-medium"
                >
                  {association.telephone}
                </a>
              </div>
            )}

            {association.email && (
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center text-gray-600 mb-2">
                  <Mail className="h-5 w-5 mr-3 text-gray-400" />
                  <span className="font-medium text-gray-800">Email</span>
                </div>
                <a
                  href={`mailto:${association.email}`}
                  className="text-blue-600 hover:text-blue-700 transition-colors duration-200 ml-8 font-medium break-all"
                >
                  {association.email}
                </a>
              </div>
            )}

            {association.site && (
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center text-gray-600 mb-2">
                  <Globe className="h-5 w-5 mr-3 text-gray-400" />
                  <span className="font-medium text-gray-800">Site web</span>
                </div>
                <a
                  href={formatWebsite(association.site)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors duration-200 ml-8 font-medium break-all"
                >
                  {association.site}
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Social Networks */}
        {(association.reseaux.facebook || association.reseaux.instagram) && (
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Globe className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-semibold text-gray-800">Réseaux sociaux</h2>
            </div>
            
            <div className="flex gap-4">
              {association.reseaux.facebook && (
                <a
                  href={formatFacebookUrl(association.reseaux.facebook)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  <Facebook className="h-5 w-5 mr-3" />
                  Suivre sur Facebook
                </a>
              )}

              {association.reseaux.instagram && (
                <a
                  href={formatInstagramUrl(association.reseaux.instagram)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  <Instagram className="h-5 w-5 mr-3" />
                  Suivre sur Instagram
                </a>
              )}
            </div>
          </div>
        )}

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-6 border border-blue-100">
          <div className="flex items-center mb-3">
            <Calendar className="h-5 w-5 text-blue-600 mr-3" />
            <h3 className="font-semibold text-gray-800">Informations pratiques</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Pour plus d'informations sur les horaires, les activités proposées ou les modalités d'inscription, 
            n'hésitez pas à contacter directement l'association via les moyens de communication indiqués ci-dessus.
          </p>
        </div>
      </div>
    </div>
  );
}