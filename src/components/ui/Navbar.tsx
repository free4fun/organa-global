import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="w-full flex items-center justify-between px-4 md:px-6 py-2 md:py-2">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center ml-0"> <img src="/assets/images/organa-global-banner.webp" alt="Organa Logo" className="w-24 md:w-36 select-none" loading="lazy"/></Link>
          <Link to="mailto:sales@organa.global" className="hidden pl-24 md:flex items-center space-x-2 hover:text-secondary transition-all"><Mail size={20} /><span className="text-sm font-bold">sales@organa.global</span></Link>
        </div>

        {/* RIGHT: Navigation */}
        <div className="hidden md:flex pr-24 space-x-8 text-sm font-bold">
          <Link to="/about" className="hover:text-secondary transition-all">About</Link>
          <Link to="/services" className="hover:text-secondary transition-all">Services</Link>
          <Link to="/web3" className="hover:text-secondary transition-all">Web3</Link>
          <Link to="/contact" className="hover:text-secondary transition-all">Contact</Link>
        </div>

        {/* MOBILE: Burger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">{menuOpen ? <X size={28} /> : <Menu size={28} />}</button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className={`md:hidden absolute top-full left-0 w-full flex flex-col items-center space-y-6 py-8 transition-all ${scrolled ? 'bg-dark/80 backdrop-blur-md' : 'bg-transparent'}`}>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="text-white hover:text-secondary text-lg font-bold">About</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)} className="text-white hover:text-secondary text-lg font-bold">Services</Link>
          <Link to="/web3" onClick={() => setMenuOpen(false)} className="text-white hover:text-secondary text-lg font-bold">Web3</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-white hover:text-secondary text-lg font-bold">Contact</Link>
        </div>
      )}
    </nav>
  );
}
