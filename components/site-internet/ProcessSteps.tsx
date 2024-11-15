"use client";

import { motion } from "framer-motion";
import { MessageSquare, Paintbrush, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "1. Consultation",
    description: "Discussion approfondie de vos besoins et objectifs pour votre site web",
    color: "#003B73"
  },
  {
    icon: Paintbrush,
    title: "2. Design",
    description: "Création de maquettes personnalisées selon votre identité visuelle",
    color: "#22c55e"
  },
  {
    icon: Code2,
    title: "3. Développement",
    description: "Intégration et développement avec les meilleures technologies",
    color: "#0ea5e9"
  },
  {
    icon: Rocket,
    title: "4. Lancement",
    description: "Tests approfondis et mise en ligne de votre site optimisé",
    color: "#F26522"
  }
];

const ProcessSteps = () => {
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
            Notre Processus de Création
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Une approche méthodique pour créer votre site web professionnel
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-[2px]" style={{ backgroundColor: step.color }}></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;