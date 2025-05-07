import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative bg-white py-32 overflow-hidden">

      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16">
        
        {/* Texto brutalista */}
        <motion.div 
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-8">
            +15 años<br /> 
            creando <span className="text-indigo-500">éxitos digitales</span>
          </h2>

          <p className="text-lg text-gray-600 mb-6">
            Combinamos innovación, estrategia y tecnología para llevar negocios hacia el éxito real en el mundo digital y Web3.
          </p>

          <a href="#services" className="inline-block bg-black text-white font-bold py-4 px-8 rounded-full hover:bg-gray-800 transition-all">
            Ver Servicios
          </a>
        </motion.div>

        {/* Imagen brutalista */}
        <motion.div 
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center"
        >
          {/* Ilustración o imagen moderna */}
          <img src="/assets/about-digital.svg" alt="Organa.global About" className="w-full max-w-md" />
        </motion.div>

      </div>

    </section>
  );
}
