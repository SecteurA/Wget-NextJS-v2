"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#001e2d] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Image
              src="https://login.wget.ma/wget3.svg"
              alt="WGET Logo"
              width={150}
              height={50}
              className="brightness-0 invert"
            />
            <p className="text-gray-200 text-sm leading-relaxed">
              WGET réunit une équipe de professionnels bénéficiant de plus de 20 ans d&apos;expérience 
              dans l&apos;hébergement web et les services numériques.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-200 hover:text-[#F26522] transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-200 hover:text-[#F26522] transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-200 hover:text-[#F26522] transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-200 hover:text-[#F26522] transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nos Services</h3>
            <ul className="space-y-4">
              {[
                'Hébergement Web',
                'Noms de Domaine',
                'Certificats SSL',
                'Solutions Cloud',
                'Serveurs Dédiés',
                'Emails Professionnels'
              ].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-gray-200 hover:text-[#F26522] transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Liens Utiles</h3>
            <ul className="space-y-4">
              {[
                { label: 'À Propos', href: '#' },
                { label: 'Espace Client', href: '#' },
                { label: 'Termes et Conditions', href: '/termes-et-conditions.html' },
                { label: 'Politique de Confidentialité', href: '/politique-de-confidentialite.html' },
                { label: 'Mentions Légales', href: '#' },
                { label: 'Politique Anti-abus', href: '/politique-anti-abus.html' }
              ].map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href}
                    className="text-gray-200 hover:text-[#F26522] transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#F26522] flex-shrink-0 mt-1" />
                <span className="text-sm text-gray-200">
                  123 Avenue Mohammed V, 
                  20000 Casablanca, Maroc
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#F26522] flex-shrink-0" />
                <span className="text-sm text-gray-200">+212 5XX-XXXXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#F26522] flex-shrink-0" />
                <span className="text-sm text-gray-200">contact@wget.ma</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-gray-200">
              © {currentYear} WGET. Tous droits réservés.
            </p>

            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-200">Moyens de paiement acceptés:</span>
              <div className="flex space-x-2">
                {['visa', 'mastercard', 'paypal'].map((card) => (
                  <div 
                    key={card}
                    className="w-10 h-6 bg-white rounded px-1 flex items-center justify-center"
                  >
                    <Image
                      src={`https://login.wget.ma/${card}.svg`}
                      alt={`${card} payment`}
                      width={24}
                      height={16}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;