import { motion } from 'framer-motion';

export default function ContactForm() {
  return (
    <section id="contact" className="relative py-32 bg-gray-100 overflow-hidden">

      {/* Fondo decorativo leve */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 opacity-50"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-12"
        >
          Pongámonos en <span className="text-indigo-500">Contacto</span>
        </motion.h2>

        {/* Formulario */}
        <form className="flex flex-col gap-6">
          <motion.input
            type="text"
            name="name"
            placeholder="Tu nombre"
            required
            className="w-full p-4 rounded-xl bg-white/70 backdrop-blur-md shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          />
          
          <motion.input
            type="email"
            name="email"
            placeholder="Tu email"
            required
            className="w-full p-4 rounded-xl bg-white/70 backdrop-blur-md shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          />

          <motion.textarea
            name="message"
            placeholder="Tu mensaje"
            rows={5}
            required
            className="w-full p-4 rounded-xl bg-white/70 backdrop-blur-md shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="w-full bg-black text-white font-bold py-4 rounded-full hover:bg-gray-800 transition-all"
          >
            Enviar Mensaje
          </motion.button>
        </form>

      </div>
    </section>
  );
}
