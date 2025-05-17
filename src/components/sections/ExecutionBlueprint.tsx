'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';

const steps = [
  {
    title: '01: Discovery Workshop',
    description:
      'We begin with an in-depth consultation to understand your business needs, goals, and challenges, ensuring a clear roadmap for a successful development journey.',
  },
  {
    title: '02: Strategy & Solution Design',
    description:
      'Our experts analyze requirements, define technical architecture, and create a tailored, scalable solution design that aligns with your long-term vision and industry standards.',
  },
  {
    title: '03: Development',
    description:
      'Using agile methodologies, we transform ideas into reality by coding, integrating essential features, and ensuring security, scalability, and seamless functionality at every stage.',
  },
  {
    title: '04: Testing & Quality Assurance',
    description:
      'Before deployment, we conduct rigorous testing, including security audits, bug fixes, and performance optimization, ensuring a flawless and robust solution.',
  },
  {
    title: '05: Launch & Maintenance',
    description:
      'We deploy the final product with full monitoring, ensuring a smooth transition, optimal performance, and ongoing updates to enhance functionality over time.',
  },
  {
    title: '06: Support & Customer Service',
    description:
      'Post-launch, we provide 24/7 technical support, troubleshooting, and updates, ensuring seamless operations and long-term success for your business.',
  },
];

export default function ExecutionBlueprint() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0a0f1c] text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left image */}
        <div className="relative w-full h-full">
          <img
            src="/assets/images/roadmap.jpg"
            alt="Execution Strategy"
            className="w-full h-full object-cover rounded-2xl shadow-xl"
          />
        </div>

        {/* Right steps */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12 leading-tight">
            Our Web 3.0 Execution Framework: <br />
            <span className="text-secondary">A Blueprint for Success</span>
          </h2>

          <div className="space-y-6 border-l-2 border-secondary pl-4 relative">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative"
              >
                <button
                  className="w-full text-left flex items-center justify-between gap-3 mb-1"
                  onClick={() => toggle(i)}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-white hover:text-secondary transition">
                    {step.title}
                  </h3>
                  <span className="text-secondary">
                    {openIndex === i ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="text-gray-400 text-sm md:text-base overflow-hidden pr-2"
                    >
                      {step.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
