import { motion } from 'framer-motion';
import { useParallax } from '@/hooks/useParallax';

export default function Web3() {
  const { style } = useParallax(0.3);

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-indigo-900 to-black text-white flex flex-col items-center justify-center px-6 py-32 overflow-hidden">
      
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold mb-8 text-center"
      >
        El futuro Web3
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg text-indigo-300 mb-16 text-center max-w-3xl"
      >
        Organa.global te conecta con el internet descentralizado, abriendo puertas a nuevas oportunidades, transparencia y crecimiento exponencial.
      </motion.p>

      <motion.div
        style={style}
        className="text-6xl font-black text-indigo-500"
      >
        Web3 is Now
      </motion.div>

    </section>

  );
}
