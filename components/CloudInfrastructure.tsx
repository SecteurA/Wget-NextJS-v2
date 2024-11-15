"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  Cloud, 
  Database, 
  Shield, 
  Cpu, 
  Zap, 
  Server,
  ArrowRight
} from "lucide-react";
import { Button } from "./ui/button";

const features = [
  {
    icon: Cloud,
    title: "Infrastructure Cloud",
    description: "Nous sommes fiers d'annoncer un investissement de plus de 4,5 millions de dirhams dans notre nouvelle infrastructure, permettant de construire notre puissante plateforme cloud.",
    gradient: "from-blue-500 via-blue-400 to-blue-300",
    iconColor: "text-blue-500"
  },
  {
    icon: Database,
    title: "Stockage NVMe Samsung",
    description: "Notre environnement cloud privé utilise le dernier stockage NVMe Samsung, comprenant plus d'1 Po de stockage NVMe pur et non contendu.",
    gradient: "from-purple-500 via-purple-400 to-purple-300",
    iconColor: "text-purple-500"
  },
  {
    icon: Shield,
    title: "Protection Complète avec CPGUARD",
    description: "cpGuard est notre solution de sécurité de choix, vous protégeant contre les malwares, les attaques par force brute et les exploits en mode automatique.",
    gradient: "from-green-500 via-green-400 to-green-300",
    iconColor: "text-green-500"
  },
  {
    icon: Cpu,
    title: "Propulsé par AMD EPYC™",
    description: "Notre infrastructure cloud est entièrement alimentée par les incroyables processeurs AMD EPYC™ de qualité entreprise, offrant un niveau inégalé de puissance.",
    gradient: "from-red-500 via-red-400 to-red-300",
    iconColor: "text-red-500"
  },
  {
    icon: Zap,
    title: "Ultra Rapide avec Litespeed",
    description: "Serveur Web Litespeed Enterprise pour des performances de pointe, maintenant alimenté par notre infrastructure cloud NVMe primée.",
    gradient: "from-amber-500 via-amber-400 to-amber-300",
    iconColor: "text-amber-500"
  },
  {
    icon: Server,
    title: "Fiabilité Cloudlinux 8",
    description: "Cloudlinux est une solution sur laquelle nous comptons depuis des années, apportant de nombreux avantages à notre plateforme d'hébergement cloud.",
    gradient: "from-cyan-500 via-cyan-400 to-cyan-300",
    iconColor: "text-cyan-500"
  },
];

const CloudInfrastructure = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  return (
    <section ref={containerRef} className="relative w-full bg-gradient-to-b from-gray-50 to-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
      
      <motion.div 
        style={{ opacity, y }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-[#003B73] mb-6"
          >
            Notre Infrastructure Cloud
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Une infrastructure moderne et performante pour propulser vos projets vers de nouveaux sommets
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-[#F26522] hover:bg-[#d54d0d] text-white"
              aria-label="Découvrir nos solutions cloud"
            >
              Découvrir nos Solutions
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 overflow-hidden relative"
                >
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 from-current via-current to-transparent" />
                  
                  {/* Icon */}
                  <motion.div 
                    className="relative mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.iconColor} bg-current/10 transition-colors duration-300`}>
                      <Icon className="w-8 h-8 text-current" aria-hidden="true" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#F26522] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 from-current via-current to-transparent" />
                  <div className="absolute top-0 right-0 w-24 h-24 transform translate-x-8 -translate-y-8">
                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rotate-45 from-current to-transparent" />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Découvrez la puissance de notre infrastructure cloud
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-[#003B73] text-[#003B73] hover:bg-[#003B73] hover:text-white"
            aria-label="Voir les spécifications techniques détaillées"
          >
            Voir les Spécifications Techniques
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CloudInfrastructure;