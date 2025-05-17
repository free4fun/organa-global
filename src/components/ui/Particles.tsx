import { useMemo, useEffect, useRef } from 'react';

export default function Particles() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Partículas memoizadas para evitar reinicio
  const particles = useMemo(() => {
    return Array.from({ length: 600 }).map((_, i) => {
      const delay = Math.random() * 12;
      const duration = 6 + Math.random() * 6;
      const size = 4 + Math.random() * 4;
      const top = Math.random() * 100;
      const left = Math.random() * 100;

      return (
        <div
          key={i}
          className="particle absolute rounded-full bg-primary opacity-40 animate-particleFloat"
          style={{
            top: `${top}vh`,
            left: `${left}vw`,
            width: `${size}px`,
            height: `${size}px`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        />
      );
    });
  }, []);

  // Movimiento reactivo al cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const particles = containerRef.current?.querySelectorAll<HTMLDivElement>('.particle');
      if (!particles) return;

      particles.forEach(p => {
        const rect = p.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 128;

        if (distance < maxDist) {
          const intensity = (maxDist - distance) / maxDist;
          p.style.filter = `brightness(${1 + intensity})`;
          p.style.opacity = `${0.6 + intensity * 0.4}`;
          p.style.boxShadow = `0 0 ${8 * intensity}px #cc6ce5`;
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

  return (
    <div ref={containerRef} className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
      {particles}
    </div>
  );
}
