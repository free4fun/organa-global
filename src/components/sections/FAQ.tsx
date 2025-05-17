'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa6';

const faqs = [
  {
    question: 'What makes your Blockchain development services stand out?',
    answer:
      'Our team blends deep technical expertise with real-world experience to deliver custom, scalable, and secure blockchain solutions tailored to each client’s needs.',
  },
  {
    question: 'Why should I invest in AI-driven solutions?',
    answer:
      'We harness AI and machine learning to deliver predictive analytics, automation, and intelligent decision-making, enhancing business efficiency and competitive advantage.',
  },
  {
    question: 'What is the role of AI in Blockchain and Web3?',
    answer:
      'AI can enhance smart contracts, optimize data usage in decentralized networks, and automate governance in DAOs, powering smarter, self-learning ecosystems.',
  },
  {
    question: 'How does Web3 differ from traditional web applications?',
    answer:
      'Web3 applications operate on decentralized networks, giving users ownership of their data and digital assets, unlike traditional apps controlled by centralized entities.',
  },
  {
    question: 'How can your Web3 solutions transform my business?',
    answer:
      'We enable businesses to unlock new revenue streams, improve transparency, and future-proof operations by integrating decentralized technologies.',
  },
  {
    question: 'Which industries are adopting Blockchain, Web3, and AI solutions the most?',
    answer:
      'Finance, healthcare, supply chain, real estate, and entertainment are leading adopters, benefiting from transparency, security, and automation.',
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-[#0a0f1c] text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          Expert Answers to Your Most Pressing Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#2a2f45] rounded-xl overflow-hidden">
              <button
                onClick={() => toggle(i)}
                className="w-full px-6 py-5 text-left flex items-center justify-between text-white font-semibold text-lg"
              >
                {faq.question}
                <span className="ml-4 text-secondary">
                  {activeIndex === i ? <FaMinus /> : <FaPlus />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5 text-gray-300 text-sm"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
