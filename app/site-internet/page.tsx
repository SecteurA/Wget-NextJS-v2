import { Metadata } from 'next';
import HeroSiteInternet from '@/components/Hero-Site-Internet';
import WhyChooseUs from '@/components/site-internet/WhyChooseUs';
import ProcessSteps from '@/components/site-internet/ProcessSteps';

export const metadata: Metadata = {
  title: 'Création Site Internet Professionnel au Maroc | WGET',
  description: 'Créez votre site internet professionnel avec WGET. Design moderne, optimisation SEO et support technique dédié. Solutions web sur mesure pour votre entreprise au Maroc.',
  keywords: ['création site web Maroc', 'site internet professionnel', 'développement web Maroc', 'agence web Maroc'],
};

export default function SiteInternet() {
  return (
    <>
      <HeroSiteInternet />
      <WhyChooseUs />
      <ProcessSteps />
    </>
  );
}