import { motion } from 'framer-motion';

const services = [
  {
    title: "Plan Gratuito",
    description: "Newsletters, material exclusivo y webinars comunitarios.",
  },
  {
    title: "Emprendedor Digital",
    description: "Redes sociales, SEO inicial y email marketing mensual.",
  },
  {
    title: "Web Emprendedor",
    description: "Alojamiento web, plantillas profesionales y soporte básico.",
  },
  {
    title: "Negocio Digital",
    description: "Gestión completa de redes, SEO avanzado y PPC ads.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 bg-gray-100 overflow-hidden">

      {/* Fondo degradado leve */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 text-center mb-20"
        >
          Nuestros <span className="text-indigo-600">Servicios</span>
        </motion.h2>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out cursor-pointer"
            >
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
