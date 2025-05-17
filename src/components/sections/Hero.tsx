import { motion, useAnimation } from 'framer-motion';
import Loader from '@/components/ui/Loader';
import { useRef, useEffect, useState } from 'react';
import { useParallax } from '@/hooks/useParallax';
import BackgroundVideo from '@/components/ui/BackgroundVideo';
import Particles from '@/components/ui/Particles';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useScrollEffects } from '@/hooks/useScrollEffects';

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const glowAnimationGlobal = useAnimation();
  const glowAnimationOrgana = useAnimation();
  const buttonAnimation = useAnimation();
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef(null);
  const logoControls = useScrollAnimation(logoRef);
  const h2 = useScrollEffects<HTMLHeadingElement>({
    once: true,
    amount: 0.3,
    enableMotionLinked: true,
    sensitivity: 1,
    initial: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  });

  const h3 = useScrollEffects<HTMLHeadingElement>({
    once: true,
    amount: 0.8,
    enableMotionLinked: true,
    sensitivity: 2, 
    initial: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  });
  
  useEffect(() => {
    const video = document.getElementById('heroVideo') as HTMLVideoElement;
    if (video?.readyState >= 3) {
      setVideoLoaded(true);
    } else {
      video?.addEventListener('canplaythrough', () => setVideoLoaded(true));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > window.innerHeight * 0.4) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
    const particles = containerRef.current?.querySelectorAll<HTMLDivElement>('.particle');
    if (!particles) return;
    particles.forEach(p => {
      const rect = p.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 100;
      if (distance < maxDist) {
        const intensity = (maxDist - distance) / maxDist;
        p.style.filter = `brightness(${1 + intensity})`;
        p.style.opacity = `${0.6 + intensity * 0.4}`;
        p.style.boxShadow = `0 0 ${10 * intensity}px #cc6ce5`;
      } else {
        p.style.filter = '';
        p.style.opacity = '';
        p.style.boxShadow = '';
      }
    });
  };

  window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    glowAnimationOrgana.start({
      textShadow: [
        "0 0 6px #ffffff, 0 0 12px #ffffff",
        "0 0 12px #8c52ff, 0 0 2px #8c52ff",
      ],
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2.5,
        ease: "easeInOut",
      }
    });
  }, [glowAnimationOrgana]);

  useEffect(() => {
    glowAnimationGlobal.start({
      textShadow: [
        "0 0 6px #ffffff, 0 0 12px #ffffff",
        "0 0 12px #cc6ce5, 0 0 2px #cc6ce5",
      ],
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2.5,
        ease: "easeInOut",
      }
    });
  }, [glowAnimationGlobal]);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y > 150) {
        buttonAnimation.start({ opacity: 0, y: -20, transition: { duration: 0.5 } });
      } else {
        buttonAnimation.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [buttonAnimation]);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {!videoLoaded && <Loader />}  
      <BackgroundVideo />
      <Particles />
      <div className="relative z-10 flex flex-col items-center text-center px-6">
      <motion.img
        ref={logoRef}
        src="/assets/images/organa-global.webp"
        alt="Organa Logo"
        initial="hidden"
        animate={logoControls}
        variants={{
          hidden: { opacity: 0, scale: 0.85, filter: "brightness(1)" },
          visible: {
            opacity: 1,
            scale: 1,
            filter: "brightness(1)",
            transition: { duration: 0.6 }
          }
        }}
        whileHover={{
          scale: 1.1,
          filter: "drop-shadow(0 0 19px #ffffff) brightness(1.1)",
        }}
        whileTap={{
          scale: 0.9,
        }}
        className="w-24 md:w-60 mb-6 select-none"
        loading="lazy"
      />
      
      <motion.h1 initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl md:text-7xl leading-tight mb-6 drop-shadow-lg font-overpass font-black">
        <motion.span animate={glowAnimationOrgana} className="text-primary">ORGANA</motion.span> <motion.span animate={glowAnimationGlobal} className="text-secondary">GLOBAL</motion.span>
      </motion.h1>
        <motion.h2 ref={h2.ref} {...h2.motionProps} className="text-2xl md:text-4xl font-semibold text-white mb-5">
          Web3 Made Human — Scalable. Secure. Yours.
        </motion.h2>
        <motion.h3 ref={h3.ref} {...h3.motionProps} className="max-w-6xl text-xl md:text-xl font-light text-white mb-10">
          Seamless digital transformation that puts people at the center of decentralized innovation
        </motion.h3>
      <motion.a href="/contact" animate={buttonAnimation} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="inline-block bg-primary/75 text-white font-bold px-10 py-4 rounded-full shadow-xl hover:bg-secondary transition-all">
        Talk To Our Experts
      </motion.a>

      {videoLoaded && showScrollIndicator && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center animate-bounce">
          <div className="w-6 h-6 border-b-2 border-r-2 border-white rotate-45"></div>
        </motion.div>
      )}
    </div>
  </section>
  );
}
