import { useEffect, useState } from 'react';

export function useGlobalParallax(speed = 0.2) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * speed);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return {
    style: {
      backgroundPosition: `center ${offset}px`,
    },
  };
}
