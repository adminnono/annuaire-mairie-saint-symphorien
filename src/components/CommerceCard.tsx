import React from 'react';
import { Phone, Mail, Globe, User, MapPin } from 'lucide-react';
import { Commerce } from '../types/Commerce';

interface CommerceCardProps {
  commerce: Commerce;
  onClick: () => void;
}

export function CommerceCard({ commerce, onClick }: CommerceCardProps) {
  const getCategoryColor = (category: string) => {
    const colors = {
      'Boulangerie - Pâtisserie': 'bg-amber-500',
      'Alimentation': 'bg-emerald-500',
      'Services': 'bg-blue-500',
      'Tabac Presse': 'bg-gray-500',
      'Coiffure': 'bg-pink-500',
      'Institut de Beauté': 'bg-rose-500',
      'Fleuriste': 'bg-green-500',
      'Restauration': 'bg-red-500',
      'Commerce Ambulant': 'bg-yellow-500',
      'Bar': 'bg-purple-500',
      'Espaces Verts': 'bg-lime-500',
      'Garage': 'bg-slate-500',
      'Contrôle Technique': 'bg-indigo-500',
      'Maçonnerie': 'bg-stone-500',
      'Plomberie': 'bg-cyan-500',
      'Ebénisterie': 'bg-orange-500',
      'Charpente': 'bg-teal-500',
      'Carreleur': 'bg-neutral-500',
      'Electricité': 'bg-yellow-600',
      'Antenniste': 'bg-violet-500',
      'Piscines': 'bg-sky-500',
      'Peinture': 'bg-fuchsia-500',
      'Ramonage': 'bg-red-600',
      'Atelier': 'bg-indigo-600',
      'Entreprise Locale': 'bg-gray-600',
      'Artisan d\'Art': 'bg-amber-600'
    };
    return colors[category as keyof typeof colors] || 'bg-blue-500';
  };

  const getCategoryImage = (category: string, nom: string) => {
    const images = {
      'Boulangerie - Pâtisserie': 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Alimentation': 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Services': 'https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Tabac Presse': 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Coiffure': 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Institut de Beauté': 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Fleuriste': 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Restauration': 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Commerce Ambulant': 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Bar': 'https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Espaces Verts': 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Garage': 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Contrôle Technique': 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Maçonnerie': 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Plomberie': 'https://images.pexels.com/photos/8486944/pexels-photo-8486944.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Ebénisterie': 'https://images.pexels.com/photos/175709/pexels-photo-175709.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Charpente': 'https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Carreleur': 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Electricité': 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Antenniste': 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Piscines': 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Peinture': 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Ramonage': 'https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Atelier': 'https://images.pexels.com/photos/175709/pexels-photo-175709.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Entreprise Locale': 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Artisan d\'Art': 'https://images.pexels.com/photos/175709/pexels-photo-175709.jpeg?auto=compress&cs=tinysrgb&w=400'
    };
    return images[category as keyof typeof images] || 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=400';
  };
  const formatWebsite = (site: string) => {
    if (site.startsWith('http://') || site.startsWith('https://')) {
      return site;
    }
    return `https://${site}`;
  };

  return (
    <div 
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      {/* Image header */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={commerce.image}
          alt={commerce.nom}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <span
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white backdrop-blur-sm ${getCategoryColor(
            commerce.categorie
          )}`}
        >
          {commerce.categorie}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{commerce.nom}</h3>
        </div>

        {/* Contact information */}
        <div className="space-y-3">
          {commerce.adresse && (
            <div className="flex items-start text-gray-600">
              <MapPin className="h-4 w-4 mr-3 text-gray-400 flex-shrink-0 mt-0.5" />
              <span className="text-sm">{commerce.adresse}</span>
            </div>
          )}

          {commerce.contact && (
            <div className="flex items-center text-gray-600">
              <User className="h-4 w-4 mr-3 text-gray-400 flex-shrink-0" />
              <span className="text-sm">{commerce.contact}</span>
            </div>
          )}

          {commerce.telephone && (
            <div className="flex items-center text-gray-600">
              <Phone className="h-4 w-4 mr-3 text-gray-400 flex-shrink-0" />
              <a
                href={`tel:${commerce.telephone}`}
                className="text-sm hover:text-blue-600 transition-colors duration-200"
              >
                {commerce.telephone}
              </a>
            </div>
          )}

          {commerce.email && (
            <div className="flex items-center text-gray-600">
              <Mail className="h-4 w-4 mr-3 text-gray-400 flex-shrink-0" />
              <a
                href={`mailto:${commerce.email}`}
                className="text-sm hover:text-blue-600 transition-colors duration-200 break-all"
              >
                {commerce.email}
              </a>
            </div>
          )}

          {commerce.site && (
            <div className="flex items-center text-gray-600">
              <Globe className="h-4 w-4 mr-3 text-gray-400 flex-shrink-0" />
              <a
                href={formatWebsite(commerce.site)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-blue-600 transition-colors duration-200 break-all"
              >
                {commerce.site}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}