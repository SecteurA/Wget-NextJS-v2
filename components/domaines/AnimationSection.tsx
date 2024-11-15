"use client";

import { motion } from "framer-motion";
import DomainSSLAnimation from "./DomainSSLAnimation";

const AnimationSection = () => {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Animation */}
          <div className="order-2 md:order-1">
            <DomainSSLAnimation />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-[#003B73]"
            >
              Infrastructure Sécurisée
            </motion.h2>
            <div className="space-y-4 text-gray-700">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg"
              >
                Notre infrastructure de pointe assure une gestion optimale de vos noms de domaine 
                et certificats SSL, avec une disponibilité garantie de 99,9%.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg"
              >
                Bénéficiez d&apos;une protection DNS avancée et d&apos;un système de surveillance 
                proactif pour une sécurité maximale de vos actifs numériques.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg"
              >
                Notre équipe d&apos;experts assure un support technique réactif 
                disponible 24h/24 et 7j/7 pour répondre à tous vos besoins.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimationSection;