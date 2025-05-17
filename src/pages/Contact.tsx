import { motion } from 'framer-motion';

export default function Contact() {
  return (
        <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-32">
      
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold mb-8 text-center"
      >
        ¡Hablemos!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg text-gray-400 mb-16 text-center max-w-2xl"
      >
        ¿Listo para llevar tu éxito al mundo digital y Web3? En Organa.global tenemos la estrategia y la pasión para hacerlo realidad. ¡Envíanos un mensaje!
      </motion.p>

      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="bg-white text-black rounded-3xl p-8 shadow-xl w-full max-w-lg"
      >
        <div className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Nombre completo"
            className="border-b-2 border-gray-300 py-2 focus:outline-none focus:border-indigo-500 transition-all"
            required
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="border-b-2 border-gray-300 py-2 focus:outline-none focus:border-indigo-500 transition-all"
            required
          />
          <textarea
            placeholder="¿Cómo podemos ayudarte?"
            rows={4}
            className="border-b-2 border-gray-300 py-2 focus:outline-none focus:border-indigo-500 transition-all"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-500 text-white font-bold py-3 rounded-full hover:bg-indigo-600 transition-all"
          >
            Enviar mensaje
          </button>
        </div>
      </motion.form>

    </section>
  );
}
