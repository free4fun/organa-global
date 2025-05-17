import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useScrollEffects } from '@/hooks/useScrollEffects';
import { useParallax } from '@/hooks/useParallax';

export default function About() {

const textRef = useScrollEffects<HTMLDivElement>({
  axis: 'x',
});
  const imageRef = useScrollEffects<HTMLDivElement>();

  const parallax = useParallax(0.2); // 🌀 Aplico parallax sólo a la imagen

  return (
    <section id="about" className="relative bg-black text-white py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16">

        {/* Texto Animado */}
        <motion.div
          ref={textRef.ref} {...textRef.motionProps}
         
          className="md:w-1/2"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
            +15 años<br />
            creando <span className="text-indigo-400">éxitos digitales</span>
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            En Organa.global combinamos innovación, estrategia y tecnología para liderar la nueva era Web3.
          </p>
          <a href="#services" className="inline-block bg-indigo-400 text-black font-bold py-4 px-8 rounded-full hover:bg-indigo-500 transition-all">
            Ver Servicios
          </a>
        </motion.div>

        {/* Imagen Animada con Parallax */}
        <motion.div
          ref={imageRef.ref}
          variants={{
            hidden: { opacity: 0, x: 80 },
            visible: { opacity: 1, x: 0, transition: { duration: 1 } },
          }}
          className="md:w-1/2 flex justify-center"
          style={parallax.style} // 💥 Aquí aplicamos parallax sólo a la imagen
        >
          <img
            src="/assets/illustrations/about-digital.svg"
            alt="About Organa"
            className="w-full max-w-md object-contain pointer-events-none"
            loading="lazy" // Lazy real
            decoding="async"
          />
        </motion.div>

      </div>
    </section>
  );
}
