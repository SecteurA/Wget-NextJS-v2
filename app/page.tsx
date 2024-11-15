import Hero from '@/components/Hero';
import DomainSearch from '@/components/DomainSearch';
import AboutSection from '@/components/AboutSection';
import CloudInfrastructure from '@/components/CloudInfrastructure';
import PricingSection from '@/components/PricingSection';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function Home() {
  return (
    <>
      <Hero />
      <DomainSearch />
      <PricingSection />
      <AboutSection />
      <CloudInfrastructure />
      <WhyChooseUs />
    </>
  );
}