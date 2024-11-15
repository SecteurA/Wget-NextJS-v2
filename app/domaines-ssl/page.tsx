import { Metadata } from 'next';
import HeroDomainesSSL from '@/components/Hero-Domaines-SSL';
import WhyChooseUs from '@/components/domaines/WhyChooseUs';
import HowToRegister from '@/components/domaines/HowToRegister';
import PopularExtensions from '@/components/domaines/PopularExtensions';
import AnimationSection from '@/components/domaines/AnimationSection';

export const metadata: Metadata = {
  title: 'Noms de Domaine .ma et Certificats SSL au Maroc | WGET',
  description: 'Enregistrez votre nom de domaine .ma et sécurisez votre site web avec nos certificats SSL. Protection Whois gratuite et support technique 24/7.',
};

export default function DomainesSSL() {
  return (
    <>
      <HeroDomainesSSL />
      <WhyChooseUs />
      <HowToRegister />
      <AnimationSection />
      <PopularExtensions />
    </>
  );
}