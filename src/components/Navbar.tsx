import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="text-white text-2xl font-bold tracking-tight">
          Organa<span className="text-indigo-400">.global</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-8 text-sm">
          <a href="#about" className="text-white hover:text-indigo-400 transition-all">
            About
          </a>
          <a href="#services" className="text-white hover:text-indigo-400 transition-all">
            Services
          </a>
          <a href="#contact" className="text-white hover:text-indigo-400 transition-all">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}
