"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Globe2, MonitorSmartphone, ShoppingCart, Server, Code, UserCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/Logo';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/domaines-ssl', label: 'Domaines & SSL', icon: Globe2 },
    { href: '/site-internet', label: 'Site internet', icon: MonitorSmartphone },
    { href: '/e-commerce', label: 'E-commerce', icon: ShoppingCart },
    { href: '/hebergement', label: 'Hébergement', icon: Server },
    { href: '/wordpress', label: 'WordPress', icon: Code },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)]'
          : 'bg-background shadow-[0_2px_20px_-2px_rgba(0,0,0,0.1)]'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-[#003B73] hover:text-[#F26522] transition-colors relative py-2 flex items-center gap-2",
                    pathname === link.href && "text-[#F26522] font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#F26522]"
                  )}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {link.label}
                </Link>
              );
            })}
            <Button
              variant="default"
              className="bg-[#F26522] hover:bg-[#d54d0d] text-white font-semibold"
              aria-label="Accéder à l'espace client"
            >
              <UserCircle2 className="h-4 w-4 mr-2" aria-hidden="true" />
              Espace Client
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isOpen}
              className="text-[#003B73] hover:text-[#F26522]"
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium text-[#003B73] hover:text-[#F26522] hover:bg-gray-50 transition-colors",
                      pathname === link.href && "text-[#F26522] bg-gray-50"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                    {link.label}
                  </Link>
                );
              })}
              {/* Mobile Client Area Button */}
              <div className="pt-4 mt-4 border-t border-gray-200">
                <Button
                  variant="default"
                  className="w-full bg-[#F26522] hover:bg-[#d54d0d] text-white font-semibold flex items-center justify-center gap-2 py-2"
                  onClick={() => setIsOpen(false)}
                  aria-label="Accéder à l'espace client"
                >
                  <UserCircle2 className="h-5 w-5" aria-hidden="true" />
                  Espace Client
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;