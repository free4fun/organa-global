import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center items-center text-center min-h-screen px-6 overflow-hidden bg-black">

      {/* Fondo dinámico opcional */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Si quieres agregar un video de fondo, sería aquí */}
        {/* <video src="/assets/bg-video.mp4" autoPlay muted loop className="w-full h-full object-cover opacity-30" /> */}
        {/* De momento un degradado dinámico */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-purple-600 to-indigo-900 opacity-30 animate-gradientMove"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-5xl md:text-8xl font-extrabold leading-tight tracking-tight"
        >
          WE KNOW.<br />
          WE WILL <span className="text-red-500">ROCK</span> YOU.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 text-indigo-100 text-lg md:text-2xl max-w-2xl mx-auto"
        >
          No es un equipo promedio, no son productos promedio, no son resultados promedio.
        </motion.p>

        <motion.a
          href="#about"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="mt-10 inline-block bg-white text-black font-bold px-10 py-4 rounded-full shadow-md hover:bg-gray-200 transition-all"
        >
          Start a Project
        </motion.a>
      </div>

    </section>
  );
}
