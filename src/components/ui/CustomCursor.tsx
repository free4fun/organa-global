import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [hovered, setHovered] = useState(false);
  

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const addHover = () => setHovered(true);
    const removeHover = () => setHovered(false);

    window.addEventListener('mousemove', moveCursor);

    const hoverElements = document.querySelectorAll('a, button');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

      const preventEverything = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    window.addEventListener('contextmenu', preventEverything);
    window.addEventListener('mousedown', preventEverything);
    window.addEventListener('mouseup', preventEverything);
    window.addEventListener('auxclick', preventEverything);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('contextmenu', preventEverything);
      window.removeEventListener('mousedown', preventEverything);
      window.removeEventListener('mouseup', preventEverything);
      window.removeEventListener('auxclick', preventEverything);
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  const size = hovered ? 8 : 14;
  const backgroundColor = hovered ? '#8c52ff' : '#cc6ce5';
  const boxShadow = hovered ? '0 0 20px #8c52ff, 0 0 20px #8c52ff' : 'none';
  const opacity = hovered ? 0.6 : 1;


  return (
    <div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] transition-all duration-300 ease-in-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor,
        opacity,
        transform: `translate(calc(${position.x}px - ${size / 2}px), calc(${position.y}px - ${size / 2}px))`,
        transition: 'width 0.3s, height 0.3s, background-color 0.3s, transform 0.1s',
        boxShadow
      }}
    />
  );
}
