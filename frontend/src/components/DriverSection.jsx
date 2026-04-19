import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Map } from 'lucide-react';

export default function DriverSection() {
  const [years, setYears] = useState(0);

  useEffect(() => {
    let current = 0;
    const target = 22;
    const interval = setInterval(() => {
      current += 1;
      setYears(current);
      if (current >= target) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Decorative angled gold line */}
      <div className="absolute top-0 left-0 w-32 h-[200%] bg-brand-gold/5 -rotate-12 transform origin-top-left -translate-x-16 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Left Side: Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-5/12 flex justify-center relative"
          >
            <div className="relative w-64 h-64 sm:w-[450px] sm:h-[450px]">
              {/* Pulsing glow background */}
              <div className="absolute inset-0 bg-brand-gold/20 rounded-full blur-[60px] animate-pulse"></div>
              
              {/* Multiple rotating rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-10px] md:inset-[-15px] rounded-full border border-dashed border-brand-gold/30 pointer-events-none"
              ></motion.div>
              
              {/* Golden ring border for image with animation */}
              <div className="w-full h-full rounded-full p-1.5 md:p-2 bg-gradient-to-tr from-brand-gold via-brand-gold/20 to-brand-gold animate-glow-slow relative z-10 shadow-[0_0_40px_rgba(245,166,35,0.3)]">
                <div className="w-full h-full rounded-full overflow-hidden border-2 md:border-4 border-brand-dark">
                  <img 
                    src="/assets/driver.jpeg" 
                    alt="Sandeep Dhumal - Professional Driver" 
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" 
                  />
                </div>
              </div>

              {/* Float Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-2 -right-2 sm:bottom-10 sm:-right-10 z-20 bg-white p-3 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl flex flex-col items-center border-t-2 md:border-t-4 border-brand-gold"
              >
                <ShieldCheck className="w-5 h-5 md:w-8 md:h-8 text-brand-gold mb-1" />
                <span className="text-brand-dark font-black text-[8px] md:text-xs uppercase tracking-widest">Verified Pro</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full lg:w-7/12 text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="h-1 w-12 md:w-16 bg-gold-gradient rounded-full"></div>
              <h4 className="text-brand-gold font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-xs">Proprietor & Expert</h4>
            </div>
            
            <h2 className="text-4xl md:text-7xl font-heading font-black text-white mb-3 md:mb-4 leading-none">Sandeep <span className="gold-text">Dhumal</span></h2>
            <p className="text-base md:text-xl text-gray-400 font-medium mb-8 md:mb-12 max-w-xl mx-auto lg:mx-0">A legacy of excellence on wheels, ensuring every kilometer is safe and premium.</p>

            <div className="flex flex-row items-center justify-center lg:justify-start gap-4 md:gap-8 mb-10 md:mb-16">
              <div className="relative">
                <div className="text-5xl md:text-9xl font-heading font-black gold-text drop-shadow-[0_5px_15px_rgba(245,166,35,0.4)]">
                  {years}+
                </div>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  className="absolute -bottom-1 left-0 h-1 bg-brand-gold rounded-full shadow-[0_0_10px_rgba(245,166,35,0.8)]"
                ></motion.div>
              </div>
              <div className="text-left">
                <p className="text-sm md:text-3xl text-white font-black mb-0.5 md:mb-1 uppercase tracking-tighter italic">Years Mastery</p>
                <p className="text-[8px] md:text-xs text-gray-400 font-bold uppercase tracking-widest">Highway Expert</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 md:gap-4">
              {[
                { icon: ShieldCheck, label: "Safety" },
                { icon: Clock, label: "Punctual" },
                { icon: Map, label: "Expert" }
              ].map((item, i) => (
                <div key={i} className="backdrop-blur-md bg-white/5 border border-white/10 p-3 md:p-6 rounded-xl md:rounded-2xl flex flex-col items-center group hover:bg-white/10 transition-all duration-300">
                  <div className="w-8 h-8 md:w-14 md:h-14 rounded-lg md:rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-2 md:mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-4 h-4 md:w-7 md:h-7" />
                  </div>
                  <h4 className="text-white font-black text-[8px] md:text-xs uppercase tracking-widest">{item.label}</h4>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}