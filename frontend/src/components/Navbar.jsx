import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Vehicles', path: '/vehicles' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Booking', path: '/booking' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-dark/85 backdrop-blur-md border-b border-brand-gold/20 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="font-heading font-bold text-3xl gold-text tracking-wider">Aadishakti</span>
            <span className="text-white text-xs font-sub uppercase tracking-[0.2em] opacity-80">Tours & Travels</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`relative font-sub text-sm font-medium transition-colors duration-300 group ${
                    isActive ? 'text-brand-gold' : 'text-white hover:text-brand-gold'
                  }`}
                >
                  {link.name}
                  <span 
                    className={`absolute -bottom-1 left-0 w-full h-[2px] bg-brand-gold transform origin-left transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  ></span>
                </Link>
              );
            })}
            
            {/* Call Button */}
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+917057053550"
              className="flex items-center gap-2 bg-gold-gradient text-brand-dark px-6 py-2.5 rounded-full font-bold font-sub shadow-[0_0_15px_rgba(245,166,35,0.3)] hover:shadow-[0_0_25px_rgba(245,166,35,0.5)] transition-shadow"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-brand-gold transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-brand-dark/95 backdrop-blur-xl border-b border-brand-gold/20 md:hidden flex flex-col overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col py-6 px-8 gap-2">
              {navLinks.map((link, idx) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    key={link.name}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block py-4 text-xl font-heading font-black tracking-tight border-b border-white/5 ${
                        isActive ? 'text-brand-gold' : 'text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.a 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                href="tel:+917057053550"
                className="mt-8 flex items-center justify-center gap-3 bg-gold-gradient text-brand-dark px-6 py-4 rounded-2xl font-black font-sub shadow-xl shadow-brand-gold/20"
              >
                <Phone size={24} />
                <span className="text-lg">Call Sandeep Now</span>
              </motion.a>
              <p className="text-center text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em] mt-6">Available 24/7 • All India</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
