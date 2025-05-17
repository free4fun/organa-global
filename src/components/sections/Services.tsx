'use client';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollEffects } from '@/hooks/useScrollEffects';
import { useEffect, useRef, useState } from 'react';

const services = [
  { link:"blockchain", title: 'Blockchain Development', description: 'Custom blockchain solutions tailored to your business needs, delivering secure, scalable, and high-performance decentralized infrastructure for the future.', image: '/assets/images/services/blockchain.jpeg' },
  { link:"nft", title: 'NFT MarketPlace Development', description: 'Build feature-rich NFT marketplaces that empower creators and collectors with seamless trading, minting, and ownership experiences.', image: '/assets/images/services/nft.jpeg' },
  { link:"dao", title: 'DAO Development', description: 'Decentralized Autonomous Organizations designed for transparent governance, automated workflows, and community-driven decision-making.', image: '/assets/images/services/dao.jpeg' },
  { link:"defi", title: 'DeFi Development', description: 'Empower your business with decentralized finance platforms offering secure, transparent, and efficient financial services for the digital economy.', image: '/assets/images/services/defi.jpeg' },
  { link:"smart_contract", title: 'Smart Contract Development', description: 'Develop robust, error-free smart contracts that automate processes, enhance trust, and ensure seamless execution across blockchain networks.', image: '/assets/images/services/smartcontract.jpeg' },
  { link:"dex", title: 'DEX Development', description: 'Launch decentralized exchanges with high liqulinkity, secure transactions, and user-friendly interfaces for seamless crypto trading.', image: '/assets/images/services/dex.jpeg' },
  { link:"crypto_wallet", title: 'Crypto Wallet', description: 'Secure, multi-functional crypto wallets enabling safe storage, seamless transactions, and easy management of digital assets.', image: '/assets/images/services/wallet.jpeg' },
  { link:"dapp", title: 'DApp Development', description: 'Create decentralized applications that combine blockchain technology with user-centric designs for scalable, secure, and innovative solutions.', image: '/assets/images/services/dapp.jpeg' },
  { link:"ico_and_ieo", title: 'ICO & IEO Development', description: 'End-to-end ICO and IEO development services to launch your token with compliance, security, and high market visibility.', image: '/assets/images/services/ico_ieo.jpeg' },
];

export default function Services() {
  const { ref, motionProps } = useScrollEffects<HTMLDivElement>({ once: false });
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const scrollX = useRef(0);

  useEffect(() => {
    let animationId: number;

    const animate = () => {
      if (!paused && trackRef.current && containerRef.current) {
        scrollX.current -= 1;
        const track = trackRef.current;
        const containerWidth = containerRef.current.offsetWidth;
        const totalScrollWidth = track.scrollWidth / 2;

        // Mueve el carrusel
        track.style.transform = `translateX(${scrollX.current}px)`;

        // Si ya se desplazó toda la primera mitad, reinicia pero sin parpadeo
        if (Math.abs(scrollX.current) >= totalScrollWidth) {
          scrollX.current = 0;
          track.style.transition = 'none'; // remueve transición
          track.style.transform = `translateX(0px)`;

          // Fuerza reflow y vuelve a aplicar transición suavemente
          void track.offsetWidth; // hack
          track.style.transition = 'transform 0.1s linear';
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [paused]);

  return (
    <section id="services" className="relative bg-black text-white py-32 overflow-hidden">
      <motion.div
        ref={ref}
        {...motionProps}
        className="max-w-7xl mx-auto px-6 text-center mb-20"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">Our Expertise Unveiled</h2>
        <p className="text-lg text-gray-400">Delivering High-Performance Development Solutions to Empower Businesses with Secure, Scalable, and Innovative Technologies for Sustainable Growth</p>
      </motion.div>

      <div
        ref={containerRef}
        className="carousel-container overflow-hidden relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <div
          ref={trackRef}
          className="flex w-max gap-6 transition-transform duration-300 ease-linear"
        >
          {[...services, ...services].map((service, i) => (
            <Link to={service.link}>
            <div key={i} className="w-80 flex-shrink-0 group relative">
              <div className="relative overflow-hidden rounded-xl shadow-lg transition-transform transform hover:scale-105">
                <img src={service.image} alt={service.title} className="w-full h-64 object-cover" />
                <div className="absolute bottom-0 left-0 w-full bg-black/70 text-center text-white text-lg font-bold p-3">
                  {service.title}
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/80 text-white p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {service.description}
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
