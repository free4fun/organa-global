import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    "Desarrollo Web personalizado",
    "Marketing Digital y Publicidad Web3",
    "Estrategias SEO de última generación",
    "Consultoría estratégica Web3",
    "Implementación de tecnología blockchain",
  ];

  return (
        <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-32">

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold mb-20 text-center"
      >
        Nuestros Servicios
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl w-full">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white text-black rounded-3xl p-8 text-center hover:bg-indigo-100 transition-all shadow-lg"
          >
            <h3 className="text-2xl font-bold">{service}</h3>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
