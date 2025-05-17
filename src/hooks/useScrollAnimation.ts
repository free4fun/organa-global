import { useEffect } from 'react';
import { useAnimation, useInView } from 'framer-motion';

export function useScrollAnimation(ref: React.RefObject<HTMLElement | null>) {
  const controls = useAnimation();
  const isInView = useInView(ref, { once: false, margin: "-100px" }); // 👈 cambiar a once: false

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isInView]);

  return controls;
}

