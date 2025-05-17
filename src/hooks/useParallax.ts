import { useEffect, useState } from 'react';

export function useParallax(speed = 0.5) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    style: {
      transform: `translateY(${offsetY * speed}px)`,
    },
  };
}
