export default function Footer() {
    return (
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo o Nombre */}
          <div className="text-2xl font-extrabold tracking-tight">
            Organa<span className="text-indigo-400">.global</span>
          </div>
  
          {/* Links */}
          <div className="flex space-x-8 text-sm">
            <a href="#about" className="hover:underline hover:text-indigo-400 transition-all">
              About
            </a>
            <a href="#services" className="hover:underline hover:text-indigo-400 transition-all">
              Services
            </a>
            <a href="#contact" className="hover:underline hover:text-indigo-400 transition-all">
              Contact
            </a>
          </div>
  
          {/* Copyright */}
          <div className="text-xs text-gray-400">
            © {new Date().getFullYear()} Organa.global. All rights reserved.
          </div>
  
        </div>
      </footer>
    );
  }
  