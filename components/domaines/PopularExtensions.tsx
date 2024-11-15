"use client";

import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";

const extensions = [
  {
    name: ".com",
    description: "Idéal pour une portée internationale",
    price: "99",
    popular: false
  },
  {
    name: ".ma",
    description: "Parfait pour renforcer votre présence au Maroc",
    price: "119",
    popular: true
  },
  {
    name: ".net",
    description: "Spécifique pour les entreprises technologiques",
    price: "99",
    popular: false
  },
  {
    name: ".org",
    description: "Conçu pour les organisations à but non lucratif",
    price: "99",
    popular: false
  }
];

const PopularExtensions = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#003B73] mb-6">
            Nos Extensions Populaires
          </h2>
          <p className="text-xl text-gray-600">
            Choisissez l&apos;extension parfaite pour votre projet
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {extensions.map((extension, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className={`bg-white rounded-xl p-6 h-full border-2 transition-all duration-300 hover:border-[#F26522] ${
                extension.popular ? 'border-[#F26522]' : 'border-gray-100'
              }`}>
                {extension.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#F26522] text-white px-4 py-1 rounded-full text-sm font-medium">
                      Populaire
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-center mb-6">
                  <Globe2 className={`w-12 h-12 ${
                    extension.popular ? 'text-[#F26522]' : 'text-[#003B73]'
                  }`} />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-[#003B73] mb-2">
                    {extension.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {extension.description}
                  </p>
                  <div className="text-[#F26522] font-bold">
                    <span className="text-3xl">{extension.price}</span>
                    <span className="text-lg"> DH/an</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularExtensions;