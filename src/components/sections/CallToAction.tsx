import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section className="relative py-32 bg-black text-center overflow-hidden">

      {/* Degradado o animación leve de fondo */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-800 via-purple-700 to-indigo-900 opacity-40 animate-gradientMove"></div>

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-white text-5xl md:text-6xl font-extrabold mb-8 leading-tight"
        >
          ¿Listo para <span className="text-indigo-400">desatar</span> tu éxito digital?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-indigo-100 text-lg md:text-2xl mb-10"
        >
          Conectá con nuestro equipo de expertos y llevá tu negocio al siguiente nivel Web3.
        </motion.p>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="inline-block bg-white text-black font-bold py-4 px-10 rounded-full shadow-md hover:bg-gray-200 transition-all"
        >
          ¡Contáctanos Ahora!
        </motion.a>
      </div>

    </section>
  );
}
