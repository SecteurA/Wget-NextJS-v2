"use client";

import { motion } from "framer-motion";
import { Search, Globe2, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const steps = [
  {
    icon: Search,
    title: "Recherchez votre nom de domaine",
    description: "Utilisez notre outil de recherche intuitif pour vérifier instantanément la disponibilité de votre nom de domaine.",
    color: "#003B73"
  },
  {
    icon: Globe2,
    title: "Choisissez votre extension",
    description: "Explorez une large gamme d'extensions, notamment .ma, .com, .net, .org, et bien plus encore.",
    color: "#22c55e"
  },
  {
    icon: CheckCircle2,
    title: "Complétez l'enregistrement",
    description: "Réservez votre nom de domaine en quelques clics grâce à un processus fluide et sécurisé.",
    color: "#0ea5e9"
  }
];

const HowToRegister = () => {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-[#003B73] mb-6"
          >
            Comment enregistrer votre nom de domaine avec wGet
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-8 shadow-lg h-full">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ 
                      backgroundColor: `${step.color}10`,
                      color: step.color
                    }}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#003B73] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-[#F26522] hover:bg-[#d54d0d] text-white"
          >
            Réserver votre nom de domaine
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToRegister;