import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { FaClock, FaGlobe, FaHandshake, FaRocket } from 'react-icons/fa';

function Counter({ from = 0, to, duration = 2000, trigger }: { from?: number; to: number; duration?: number; trigger: boolean }) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!trigger) return;

    let current = from;
    const step = () => {
      setCount(current);
      if (current < to) {
        current += 1;
        setTimeout(step, duration / to);
      }
    };

    step();

  }, [trigger, from, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const stats = [
    {
      icon: <FaRocket size={32} />,
      value: 15,
      suffix: '+',
      label: 'Years of Expertise',
      description: 'Crafting Future-Ready Tech Innovations',
      delay: 0,
    },
    {
      icon: <FaHandshake size={32} />,
      value: 99,
      suffix: '%',
      label: 'Client Retention',
      description: 'Fostering Long-Term Partnerships',
      delay: 0.3,
    },
    {
      icon: <FaGlobe size={32} />,
      value: 12,
      suffix: '+',
      label: 'Countries Served',
      description: 'Global Reach with Local Impact',
      delay: 0.6,
    },
    {
      icon: <FaClock size={32} />,
      value: 24,
      suffix: '/7',
      label: 'Support',
      description: 'Always-On Service & Innovation',
      delay: 0.9,
    },
  ];

  return (
    <section id="about" ref={ref} className="relative bg-black text-white py-32 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          The Leading Tech Ally for Forward-Thinking Enterprises
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {stats.map(({ icon, value, suffix, label, description, delay }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay }}
            className="bg-[#111] rounded-2xl px-6 py-10 shadow-lg flex flex-col items-start"
          >
            <div className="text-primary mb-4">{icon}</div>
            <h3 className="text-3xl font-bold text-white mb-2">
              <Counter to={value} duration={2000 + i * 500} trigger={isInView} />

              <span className="ml-1 text-primary">{suffix}</span>
            </h3>
            <h4 className="text-lg font-semibold text-white">{label}</h4>
            <p className="text-sm text-gray-400 mt-2">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
