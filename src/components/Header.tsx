import React from "react";
import { MapPin, Building2 } from "lucide-react";

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            {/* Logo de la commune */}
            <div className="relative mr-6">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 shadow-xl overflow-hidden">
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center shadow-lg">
                <MapPin className="h-3 w-3 text-white" />
              </div>
            </div>

            {/* Titre principal */}
            <div className="text-left">
              <h1 className="text-2xl md:text-5xl font-bold leading-tight">
                Saint-Symphorien
              </h1>
              <div className="flex items-center mt-2 text-blue-100">
                <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                <span className="text-lg font-medium">Commune des Landes</span>
              </div>
            </div>
          </div>

          <p className="text-xl text-blue-100 font-medium">Annuaire Local</p>
          <p className="mt-2 text-blue-200 max-w-2xl mx-auto">
            Découvrez les associations, commerces et artisans de notre belle
            commune
          </p>
        </div>
      </div>
    </header>
  );
}
