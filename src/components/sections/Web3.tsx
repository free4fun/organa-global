import { useParallax } from '@/hooks/useParallax';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';


export default function Web3Future() {
  const { style } = useParallax(0.2);

  return (
    <section
      id="future"
      className="relative py-32 overflow-hidden bg-gradient-to-br from-primary/30 via-black/40 to-secondary/30"
    >
      {/* Imagen de fondo con overlay brutalista */}
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-black to-secondary mix-blend-multiply" />
        <img src="/assets/images/services/exploreallservices.webp" alt="Web3 Future Background" className="w-full h-full object-cover opacity-30"/>
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.h2 initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: false }} className="text-4xl md:text-6xl font-extrabold text-white mb-10 tracking-tight">
          Unlock Boundless Potential with <br className="hidden md:block" /><span className="text-secondary">Our World-Class Expertise</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} viewport={{ once: false }} className="text-xl text-indigo-300 max-w-3xl">
          Build secure, scalable, and innovative solutions with our cutting-edge development team.
        </motion.p>

 <motion.a
      href="/services"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative inline-flex items-center px-8 py-4 mt-16 text-lg font-extrabold text-black bg-gradient-to-r from-primary to-secondary rounded-full shadow-xl group overflow-hidden"
    >
      <span className="z-10">Explore All Services</span>

      {/* Ícono con animación */}
      <ArrowUpRight
        className="z-10 ml-3 text-black transition-transform duration-300 group-hover:translate-x-1 animate-bounce-slow"
        size={24}
      />

      {/* Flash inicial */}
      <motion.div
        initial={{ left: '-100%' }}
        animate={{ left: '100%' }}
        transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.5 }}
        className="absolute top-0 left-0 w-1/3 h-full bg-white/40 blur-lg opacity-60 pointer-events-none"
      />

      <span className="absolute left-[-100%] top-0 h-full w-[30%] bg-white/50 blur-lg opacity-70 pointer-events-none animate-shine" />

      {/* HOVER overlay sutil */}
      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition duration-300 pointer-events-none rounded-full" />
    </motion.a>
      </div>
    </section>
  );
}
