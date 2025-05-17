import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-16 relative overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10 items-start">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex justify-center md:justify-start w-full">
              <img src="/assets/images/organa-global-banner.webp" alt="Organa Logo" className="w-14 md:w-64 mb-4 select-none" loading="lazy"/>
            </div>
            <p className="text-sm text-gray-300 max-w-xs">Web3 Made Human — Scalable. Secure. Yours.</p>
          </div>

          <div className="flex flex-col space-y-2 text-center md:text-left font-bold">
            {['About', 'Services', 'Web3', 'Contact'].map((item, idx) => (
              <Link key={idx} to={`/${item.toLowerCase()}`} className="hover:text-secondary transition transform hover:skew-x-3">{item}</Link>
            ))}
          </div>

          <div className="flex flex-col space-y-2 text-center md:text-left font-bold">
            {['About', 'Services', 'Web3', 'Contact'].map((item, idx) => (
              <Link key={idx} to={`/${item.toLowerCase()}`} className="hover:text-secondary transition transform hover:skew-x-3">{item}</Link>
            ))}
          </div>

          <div className="flex flex-col space-y-2 text-center md:text-left font-bold">
            {['About', 'Services', 'Web3', 'Contact'].map((item, idx) => (
              <Link key={idx} to={`/${item.toLowerCase()}`} className="hover:text-secondary transition transform hover:skew-x-3">{item}</Link>
            ))}
          </div>

          <div className='self-end'>
            <div className='pb-4 text-primary font-bold'>Follow Us</div>
              <div className="flex md:text-left pr-24 space-x-8 text-sm font-bold">
                <Link to={"/"}><FaLinkedin className="text-2xl hover:text-secondary transition-all"/></Link>
                <Link to={"/"}><FaInstagram className="text-2xl hover:text-secondary transition-all"/></Link>
                <Link to={"/"}><FaFacebook className="text-2xl hover:text-secondary transition-all"/></Link>
                <Link to={"/"}><FaYoutube className="text-2xl hover:text-secondary transition-all"/></Link>
            </div>
          </div>
        </div>
      <div className="text-center text-xs text-gray-400 mt-12" >© {new Date().getFullYear()} Organa.global</div>
    </footer>
  );
}
