"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Input } from './ui/input';

const HeroDomainesSSL = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [domain, setDomain] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const slides = [
    {
      title: "Sécurisez Votre Nom de Domaine .ma",
      subtitle: "Votre Identité Numérique au Maroc",
      features: [
        "Enregistrement instantané",
        "Protection Whois gratuite",
        "Support technique 24/7"
      ],
      image: "https://www.heberjahiz.com/media/slideshow/dotma2022/illus_dotma.webp",
      bgClass: "bg-gray-50",
      textColorClass: "text-[#003B73]",
      accentColorClass: "text-[#F26522]"
    },
    {
      title: "Certificats SSL Premium",
      subtitle: "Sécurité et Confiance pour Votre Site Web",
      features: [
        "Chiffrement 256-bit",
        "Installation gratuite",
        "Garantie jusqu'à 1.75M$"
      ],
      image: "https://www.heberjahiz.com/media/slideshow/dotma2022/illus_dotma.webp",
      bgClass: "bg-[#003B73]",
      textColorClass: "text-white",
      accentColorClass: "text-[#F26522]"
    }
  ];

  const handleDomainSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle domain search logic here
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    const createParticle = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      particles.push({
        x,
        y,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2
      });
    };

    for (let i = 0; i < 50; i++) {
      createParticle();
    }

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const color = currentSlide === 0 ? '0, 59, 115' : '255, 255, 255';
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${color}, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        const particleColor = currentSlide === 0 ? '242, 101, 34' : '255, 255, 255';
        ctx.fillStyle = `rgba(${particleColor}, ${particle.opacity})`;
        ctx.fill();
      });

      connectParticles();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [currentSlide]);

  const currentSlideData = slides[currentSlide];

  return (
    <div className={`relative ${currentSlideData.bgClass} w-full overflow-hidden transition-colors duration-500`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 md:px-8 z-20">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className={`${currentSlideData.textColorClass} hover:bg-current/10 backdrop-blur-sm`}
          aria-label="Diapositive précédente"
        >
          <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className={`${currentSlideData.textColorClass} hover:bg-current/10 backdrop-blur-sm`}
          aria-label="Diapositive suivante"
        >
          <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
        </Button>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-2 items-center">
            {/* Left Column */}
            <div className="space-y-4">
              <h1 className={`text-3xl md:text-4xl font-bold ${currentSlideData.textColorClass} leading-tight animate-fade-in`}>
                {currentSlideData.title}
              </h1>
              <h2 className={`text-xl md:text-2xl font-extrabold ${currentSlideData.accentColorClass} animate-slide-up`}>
                {currentSlideData.subtitle}
              </h2>
              
              {currentSlide === 0 && (
                <form onSubmit={handleDomainSearch} className="space-y-4 animate-fade-in-up">
                  <div className="flex gap-4">
                    <Input
                      type="text"
                      placeholder="Rechercher votre nom de domaine..."
                      value={domain}
                      onChange={(e) => setDomain(e.target.value)}
                      className="h-12 bg-white/10 border-white/20 text-current placeholder:text-current/70"
                      aria-label="Nom de domaine"
                    />
                    <Button 
                      type="submit"
                      size="lg"
                      className="bg-[#22c55e] hover:bg-[#16a34a] text-white min-w-[120px]"
                    >
                      <Search className="w-5 h-5" />
                    </Button>
                  </div>
                  <p className="text-sm text-current/70">
                    Exemple: monentreprise.ma, monsite.ma
                  </p>
                </form>
              )}

              <div className={`space-y-2 text-base ${currentSlideData.textColorClass} animate-fade-in-up`}>
                {currentSlideData.features.map((feature, index) => (
                  <p key={index} className="flex items-center">
                    <span className={`w-2 h-2 ${currentSlideData.textColorClass} rounded-full mr-3`}></span>
                    {feature}
                  </p>
                ))}
              </div>
              <p className={`text-xl md:text-2xl font-bold ${currentSlideData.accentColorClass} animate-fade-in mt-4`}>
                {currentSlide === 0 ? 'À partir de 119 DH/an' : 'À partir de 299 DH/an'}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up mt-6">
                <Button 
                  size="lg"
                  className="w-full sm:w-auto bg-[#22c55e] hover:bg-[#16a34a] text-white shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105"
                  aria-label={currentSlide === 0 ? "Commander un nom de domaine" : "Commander un certificat SSL"}
                >
                  {currentSlide === 0 ? 'Commander un Domaine' : 'Commander un SSL'}
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className={`w-full sm:w-auto border-current ${currentSlideData.textColorClass} hover:bg-current hover:text-white`}
                  aria-label="En savoir plus"
                >
                  En Savoir Plus
                </Button>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative h-[300px] md:h-[400px] w-full animate-fade-in">
              <Image
                src={currentSlideData.image}
                alt={currentSlide === 0 ? "Noms de domaine .ma au Maroc" : "Certificats SSL pour sites web"}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-4">
            <h1 className={`text-2xl font-bold ${currentSlideData.textColorClass} leading-tight animate-fade-in`}>
              {currentSlideData.title}
            </h1>
            <h2 className={`text-lg font-extrabold ${currentSlideData.accentColorClass} animate-slide-up`}>
              {currentSlideData.subtitle}
            </h2>
            
            {currentSlide === 0 && (
              <form onSubmit={handleDomainSearch} className="space-y-4 animate-fade-in-up">
                <div className="flex flex-col gap-2">
                  <Input
                    type="text"
                    placeholder="Rechercher votre nom de domaine..."
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="h-12 bg-white/10 border-white/20 text-current placeholder:text-current/70"
                    aria-label="Nom de domaine"
                  />
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white"
                  >
                    <Search className="w-5 h-5 mr-2" />
                    Rechercher
                  </Button>
                </div>
                <p className="text-sm text-current/70">
                  Exemple: monentreprise.ma, monsite.ma
                </p>
              </form>
            )}

            <div className="relative h-[200px] w-full animate-fade-in">
              <Image
                src={currentSlideData.image}
                alt={currentSlide === 0 ? "Noms de domaine .ma au Maroc" : "Certificats SSL pour sites web"}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className={`space-y-2 text-sm ${currentSlideData.textColorClass} animate-fade-in-up`}>
              {currentSlideData.features.map((feature, index) => (
                <p key={index} className="flex items-center">
                  <span className={`w-2 h-2 ${currentSlideData.textColorClass} rounded-full mr-3`}></span>
                  {feature}
                </p>
              ))}
            </div>
            <p className={`text-xl font-bold ${currentSlideData.accentColorClass} animate-fade-in mt-4`}>
              {currentSlide === 0 ? 'À partir de 119 DH/an' : 'À partir de 299 DH/an'}
            </p>
            <div className="flex flex-col gap-3 animate-fade-in-up mt-4">
              <Button 
                size="lg"
                className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105"
                aria-label={currentSlide === 0 ? "Commander un nom de domaine" : "Commander un certificat SSL"}
              >
                {currentSlide === 0 ? 'Commander un Domaine' : 'Commander un SSL'}
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className={`w-full border-current ${currentSlideData.textColorClass} hover:bg-current hover:text-white`}
                aria-label="En savoir plus"
              >
                En Savoir Plus
              </Button>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? `w-4 ${currentSlideData.accentColorClass} bg-current`
                    : `${currentSlideData.textColorClass} bg-current/50`
                }`}
                aria-label={`Aller à la diapositive ${index + 1}`}
                aria-current={index === currentSlide ? 'true' : 'false'}
              />
            ))}
          </div>

          {/* SEO Description */}
          <div className={`text-center ${currentSlideData.textColorClass} mt-8`}>
            <p className="text-lg">
              {currentSlide === 0 
                ? "Enregistrez votre nom de domaine .ma en quelques clics. Protection et gestion simplifiée de vos domaines au Maroc."
                : "Sécurisez votre site web avec nos certificats SSL. Installation gratuite et support technique 24/7."}
            </p>
          </div>

          {/* Disclaimer */}
          <p className={`text-xs ${currentSlideData.textColorClass}/70 animate-fade-in`}>
            * Prix hors taxes, sous réserve d&apos;éligibilité
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroDomainesSSL;