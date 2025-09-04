import React from 'react';
import { Phone, Mail, Globe, User, MapPin, Store, Clock, Star } from 'lucide-react';
import { Commerce } from '../types/Commerce';

interface CommerceDetailProps {
  commerce: Commerce;
}

export function CommerceDetail({ commerce }: CommerceDetailProps) {
  const getCategoryColor = (category: string) => {
    const colors = {
      'Boulangerie - Pâtisserie': 'from-amber-500 to-amber-600',
      'Alimentation': 'from-emerald-500 to-emerald-600',
      'Services': 'from-blue-500 to-blue-600',
      'Tabac Presse': 'from-gray-500 to-gray-600',
      'Coiffure': 'from-pink-500 to-pink-600',
      'Institut de Beauté': 'from-rose-500 to-rose-600',
      'Fleuriste': 'from-green-500 to-green-600',
      'Restauration': 'from-red-500 to-red-600',
      'Commerce Ambulant': 'from-yellow-500 to-yellow-600',
      'Bar': 'from-purple-500 to-purple-600',
      'Espaces Verts': 'from-lime-500 to-lime-600',
      'Garage': 'from-slate-500 to-slate-600',
      'Contrôle Technique': 'from-indigo-500 to-indigo-600',
      'Maçonnerie': 'from-stone-500 to-stone-600',
      'Plomberie': 'from-cyan-500 to-cyan-600',
      'Ebénisterie': 'from-orange-500 to-orange-600',
      'Charpente': 'from-teal-500 to-teal-600',
      'Carreleur': 'from-neutral-500 to-neutral-600',
      'Electricité': 'from-yellow-600 to-yellow-700',
      'Antenniste': 'from-violet-500 to-violet-600',
      'Piscines': 'from-sky-500 to-sky-600',
      'Peinture': 'from-fuchsia-500 to-fuchsia-600',
      'Ramonage': 'from-red-600 to-red-700',
      'Atelier': 'from-indigo-600 to-indigo-700',
      'Entreprise Locale': 'from-gray-600 to-gray-700',
      'Artisan d\'Art': 'from-amber-600 to-amber-700'
    };
    return colors[category as keyof typeof colors] || 'from-blue-500 to-blue-600';
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      'Boulangerie - Pâtisserie': '🥖',
      'Alimentation': '🛒',
      'Services': '🏢',
      'Tabac Presse': '📰',
      'Coiffure': '✂️',
      'Institut de Beauté': '💆',
      'Fleuriste': '🌸',
      'Restauration': '🍽️',
      'Commerce Ambulant': '🚚',
      'Bar': '🍺',
      'Espaces Verts': '🌿',
      'Garage': '🔧',
      'Contrôle Technique': '🚗',
      'Maçonnerie': '🧱',
      'Plomberie': '🔧',
      'Ebénisterie': '🪵',
      'Charpente': '🏗️',
      'Carreleur': '🔲',
      'Electricité': '⚡',
      'Antenniste': '📡',
      'Piscines': '🏊',
      'Peinture': '🎨',
      'Ramonage': '🧹',
      'Atelier': '🛠️',
      'Entreprise Locale': '🏭',
      'Artisan d\'Art': '🎨'
    };
    return icons[category as keyof typeof icons] || '🏪';
  };

  const formatWebsite = (site: string) => {
    if (site.startsWith('http://') || site.startsWith('https://')) {
      return site;
    }
    return `https://${site}`;
  };

  const getDescription = (category: string, nom: string) => {
    if (category === 'Boulangerie - Pâtisserie') {
      return "Découvrez nos pains artisanaux, viennoiseries et pâtisseries fraîches, préparés avec passion selon les traditions boulangères.";
    }
    if (category === 'Alimentation') {
      return "Votre commerce de proximité pour tous vos besoins alimentaires quotidiens, avec des produits frais et de qualité.";
    }
    if (category === 'Coiffure') {
      return "Salon de coiffure professionnel proposant coupes, colorations et soins capillaires dans une ambiance conviviale.";
    }
    if (category === 'Restauration') {
      return "Restaurant proposant une cuisine savoureuse dans un cadre chaleureux, idéal pour vos repas en famille ou entre amis.";
    }
    if (category === 'Services') {
      return "Services de proximité pour faciliter votre quotidien et répondre à vos besoins administratifs et financiers.";
    }
    return "Commerce local contribuant à la vitalité économique et sociale de Saint-Symphorien.";
  };

  return (
    <div className="bg-white">
      {/* Hero Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={commerce.image}
          alt={commerce.nom}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Category Badge */}
        <div className={`absolute top-6 left-6 px-4 py-2 rounded-full bg-gradient-to-r ${getCategoryColor(commerce.categorie)} text-white font-semibold shadow-lg backdrop-blur-sm`}>
          <span className="mr-2">{getCategoryIcon(commerce.categorie)}</span>
          {commerce.categorie}
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-6 left-6 right-6">
          <h1 className="text-3xl font-bold text-white mb-2 leading-tight">
            {commerce.nom}
          </h1>
          {commerce.adresse && (
            <div className="flex items-center text-white/90">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="text-sm">{commerce.adresse}</span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Description Section */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Store className="h-6 w-6 text-teal-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">À propos</h2>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <p className="text-gray-700 leading-relaxed">
              {getDescription(commerce.categorie, commerce.nom)}
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Phone className="h-6 w-6 text-teal-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Informations de contact</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {commerce.adresse && (
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-5 w-5 mr-3 text-gray-400" />
                  <span className="font-medium text-gray-800">Adresse</span>
                </div>
                <p className="text-gray-700 ml-8">{commerce.adresse}</p>
              </div>
            )}

            {commerce.contact && (
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center text-gray-600 mb-2">
                  <User className="h-5 w-5 mr-3 text-gray-400" />
                  <span className="font-medium text-gray-800">Contact</span>
                </div>
                <p className="text-gray-700 ml-8">{commerce.contact}</p>
              </div>
            )}

            {commerce.telephone && (
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center text-gray-600 mb-2">
                  <Phone className="h-5 w-5 mr-3 text-gray-400" />
                  <span className="font-medium text-gray-800">Téléphone</span>
                </div>
                <a
                  href={`tel:${commerce.telephone}`}
                  className="text-teal-600 hover:text-teal-700 transition-colors duration-200 ml-8 font-medium"
                >
                  {commerce.telephone}
                </a>
              </div>
            )}

            {commerce.email && (
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center text-gray-600 mb-2">
                  <Mail className="h-5 w-5 mr-3 text-gray-400" />
                  <span className="font-medium text-gray-800">Email</span>
                </div>
                <a
                  href={`mailto:${commerce.email}`}
                  className="text-teal-600 hover:text-teal-700 transition-colors duration-200 ml-8 font-medium break-all"
                >
                  {commerce.email}
                </a>
              </div>
            )}

            {commerce.site && (
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center text-gray-600 mb-2">
                  <Globe className="h-5 w-5 mr-3 text-gray-400" />
                  <span className="font-medium text-gray-800">Site web</span>
                </div>
                <a
                  href={formatWebsite(commerce.site)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700 transition-colors duration-200 ml-8 font-medium break-all"
                >
                  {commerce.site}
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-6 border border-teal-100">
          <div className="flex items-center mb-3">
            <Star className="h-5 w-5 text-teal-600 mr-3" />
            <h3 className="font-semibold text-gray-800">Commerce local</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Ce commerce contribue à la vitalité économique de Saint-Symphorien. 
            N'hésitez pas à les contacter pour découvrir leurs produits et services.
          </p>
        </div>
      </div>
    </div>
  );
}