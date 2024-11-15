"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const plans = [
  {
    name: "Starter Pack",
    description: "Parfait pour débuter votre présence en ligne",
    price: "119",
    period: "an",
    features: [
      "1 nom de domaine .ma",
      "Hébergement 5 Go SSD",
      "5 adresses email",
      "Certificat SSL gratuit",
      "Support par email",
      "Bande passante 100 Mbps",
      "1 base de données MySQL"
    ],
    color: "border-blue-500/20",
    gradient: "from-blue-500/10 via-transparent",
    recommended: false
  },
  {
    name: "Business Pro",
    description: "Solution complète pour les entreprises",
    price: "299",
    period: "an",
    features: [
      "1 nom de domaine .ma",
      "Hébergement 20 Go SSD NVMe",
      "20 adresses email",
      "SSL Wildcard inclus",
      "Support prioritaire 24/7",
      "Sauvegarde quotidienne",
      "CDN & Protection DDoS"
    ],
    color: "border-purple-500/20",
    gradient: "from-purple-500/10 via-transparent",
    recommended: true
  },
  {
    name: "E-commerce Plus",
    description: "Optimisé pour les boutiques en ligne",
    price: "499",
    period: "an",
    features: [
      "1 nom de domaine .ma",
      "Hébergement 50 Go SSD NVMe",
      "Email illimité",
      "SSL Wildcard Premium",
      "Support VIP 24/7",
      "Sauvegarde temps réel",
      "CDN & IP dédiée"
    ],
    color: "border-amber-500/20",
    gradient: "from-amber-500/10 via-transparent",
    recommended: false
  },
  {
    name: "Enterprise Cloud",
    description: "Infrastructure dédiée haute performance",
    price: "999",
    period: "an",
    features: [
      "3 noms de domaine .ma",
      "Hébergement 100 Go SSD NVMe",
      "Email illimité",
      "SSL Wildcard Enterprise",
      "Support VIP dédié 24/7",
      "Infrastructure dédiée",
      "Migration gratuite incluse"
    ],
    color: "border-green-500/20",
    gradient: "from-green-500/10 via-transparent",
    recommended: false
  }
];

const PricingSection = () => {
  return (
    <section className="w-full bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-[#003B73] mb-6"
          >
            Choisissez votre forfait
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Des solutions adaptées à tous vos besoins, avec un excellent rapport qualité-prix
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className={`relative h-full bg-white rounded-2xl p-6 border ${plan.color} ${
                  plan.recommended ? 'shadow-2xl scale-105 z-10' : 'shadow-lg hover:shadow-xl'
                } transition-all duration-300 flex flex-col`}
              >
                {/* Recommended Badge */}
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-[#F26522] text-white shadow-lg">
                      Recommandé
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-baseline">
                    <span className="text-4xl font-bold text-[#003B73]">{plan.price}</span>
                    <span className="text-xl text-gray-600 ml-2">DH/{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex-grow">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  size="lg"
                  className={`w-full mt-auto ${
                    plan.recommended
                      ? 'bg-[#F26522] hover:bg-[#d54d0d] text-white'
                      : 'bg-white text-[#003B73] border-2 border-[#003B73] hover:bg-[#003B73] hover:text-white'
                  }`}
                  aria-label={`Commander le forfait ${plan.name}`}
                >
                  Commander Maintenant
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12 text-gray-600"
        >
          <p>Tous les prix sont hors taxes. Engagement minimum d&apos;un an.</p>
          <p className="mt-2">
            Besoin d&apos;une solution personnalisée ?{" "}
            <a href="#contact" className="text-[#F26522] hover:underline">
              Contactez-nous
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;