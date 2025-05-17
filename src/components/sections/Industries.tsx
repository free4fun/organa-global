'use client';

import { motion } from 'framer-motion';
import {
  FaBoxes, FaHeartbeat, FaGraduationCap, FaBuilding, FaShoppingCart,
  FaDollarSign, FaFilm, FaBalanceScale, FaLandmark, FaOilCan, FaLeaf,
  FaTruck, FaGamepad, FaPlane, FaDumbbell, FaCar, FaWarehouse, FaShieldAlt,
  FaStore, FaGlobe
} from 'react-icons/fa';
import { useMemo } from 'react';

const motionEffects = [
  { scale: [1, 1.2, 1] },
  { rotate: [0, 15, -15, 0] },
  { y: [0, -10, 0] },
  { rotateZ: [0, 5, -5, 0] },
  { x: [0, 8, -8, 0] },
  { rotateY: [0, 20, -20, 0] },
  { scale: [1, 1.1, 1], rotate: [0, 2, -2, 0] },
];

const industries = [
  { name: 'Supply Chain', icon: FaBoxes },
  { name: 'Healthcare', icon: FaHeartbeat },
  { name: 'Education', icon: FaGraduationCap },
  { name: 'Real Estate', icon: FaBuilding },
  { name: 'E-commerce', icon: FaShoppingCart },
  { name: 'Finance', icon: FaDollarSign },
  { name: 'Entertainment', icon: FaFilm },
  { name: 'Legal', icon: FaBalanceScale },
  { name: 'Government', icon: FaLandmark },
  { name: 'Oil & Gas', icon: FaOilCan },
  { name: 'Agriculture', icon: FaLeaf },
  { name: 'Logistics', icon: FaTruck },
  { name: 'Gaming', icon: FaGamepad },
  { name: 'Travel', icon: FaGlobe },
  { name: 'Retail', icon: FaStore },
  { name: 'Fitness', icon: FaDumbbell },
  { name: 'Aviation', icon: FaPlane },
  { name: 'Insurance', icon: FaShieldAlt },
  { name: 'Automotive', icon: FaCar },
  { name: 'Manufacturing', icon: FaWarehouse },
];

export default function Industries() {
  const animatedIndustries = useMemo(() => {
    return industries.map(industry => ({
      ...industry,
      effect: motionEffects[Math.floor(Math.random() * motionEffects.length)],
    }));
  }, []);

  return (
    <section className="bg-[#0a0f1c] text-white py-24 px-6">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ y: 100, scale: 0.8, opacity: 0 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 120 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Serving a Broad Range of Industries
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          Tailored blockchain innovation and impact across every sector of the global economy.
        </motion.p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
  {animatedIndustries.map(({ name, icon: Icon, effect }, i) => (
    <motion.div
      key={name}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: i * 0.03, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover="hover"
      className="group bg-gradient-to-b from-indigo-800 to-indigo-600 p-6 rounded-xl shadow-xl flex flex-col items-center justify-center text-center h-40 w-full min-w-[150px]"
    >
      <motion.div
        variants={{
          hover: {
            ...effect,
            transition: {
              duration: 0.5,
              repeat: Infinity,
              repeatType: 'mirror',
            },
          },
        }}
        className="text-white text-4xl mb-2 group-hover:text-secondary transition-colors"
      >
        <Icon />
      </motion.div>
      <p className="text-sm font-semibold text-white truncate w-full">{name}</p>
    </motion.div>
  ))}
</div>

    </section>
  );
}
