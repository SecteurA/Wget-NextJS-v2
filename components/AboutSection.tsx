import TerminalAnimation from './TerminalAnimation';

const AboutSection = () => {
  return (
    <div className="w-full bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Terminal Animation */}
          <div className="order-2 md:order-1">
            <TerminalAnimation />
          </div>

          {/* About Content */}
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003B73]">
              Qui Sommes-Nous ?
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                WGET réunit une équipe de professionnels bénéficiant de plus de 20 ans d&apos;expérience 
                dans l&apos;hébergement web et les services numériques.
              </p>
              <p className="text-lg">
                Notre mission est de fournir des solutions modernes, sécurisées et parfaitement 
                adaptées aux besoins de chaque client, qu&apos;il s&apos;agisse de projets individuels 
                ou de grandes entreprises.
              </p>
              <p className="text-lg">
                Avec une expertise approfondie et une infrastructure à la pointe de la technologie, 
                nous offrons des performances optimales, une disponibilité garantie de 99,9 % et 
                un support technique réactif disponible 24h/24 et 7j/7.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;