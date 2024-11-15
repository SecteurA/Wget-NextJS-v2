"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const DomainSearch = () => {
  const [domain, setDomain] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle domain search logic here
  };

  return (
    <div className="w-full bg-[#003B73] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold">
              L&apos;adresse web parfaite est à votre portée !
            </h2>
            <p className="text-lg md:text-xl text-gray-200">
              Trouvez et enregistrez votre nom de domaine dès maintenant.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-[#F26522]">
              À partir de 119 DH/an.
            </p>
          </div>

          {/* Right Column - Search Form */}
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Rechercher votre nom de domaine..."
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:border-[#F26522] focus:ring-[#F26522]"
                  aria-label="Nom de domaine"
                />
              </div>
              <Button 
                type="submit"
                size="lg"
                className="w-full sm:w-auto bg-[#F26522] hover:bg-[#d54d0d] text-white font-semibold sm:min-w-[200px] h-12"
                aria-label="Vérifier la disponibilité du domaine"
              >
                <Search className="w-5 h-5 mr-2" aria-hidden="true" />
                Vérifier
              </Button>
            </div>
            <p className="text-sm text-gray-200">
              Exemple: monentreprise.ma, monsite.ma
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DomainSearch;