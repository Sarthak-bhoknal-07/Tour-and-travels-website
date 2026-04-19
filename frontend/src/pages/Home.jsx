import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Map, Star, ChevronDown, CheckCircle2, Phone, MessageSquare, Send } from 'lucide-react';
import CarCard from '../components/CarCard';
import DriverSection from '../components/DriverSection';
import BookingForm from '../components/BookingForm';

export default function Home() {
  const featuredCars = [
    {
      id: 'ERTIGA',
      name: 'Suzuki Ertiga',
      image: '/assets/ertiga/WhatsApp Image 2026-04-11 at 12.16.36 AM (2).jpeg',
      seats: 7,
      ac: true,
      price: 'Premium Comfort',
      features: ['Luxury Family Car', 'Comfortable Long Drive', 'Ample Luggage Space']
    },
    {
      id: 'GLANZA',
      name: 'Toyota Glanza',
      image: '/assets/glanza/WhatsApp Image 2026-04-11 at 12.16.17 AM (1).jpeg',
      seats: 5,
      ac: true,
      price: 'Premium Comfort',
      features: ['Premium Sedan Experience', 'Smooth Highway Ride', 'High Safety Standards']
    }
  ];

  const heroStagger = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, delayChildren: 0.2, duration: 1 } }
  };
  
  const heroItem = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  return (
    <div className="bg-brand-dark min-h-screen text-white overflow-x-hidden font-sub">
      {/* SECTION 1 — HERO (MOBILE OPTIMIZED) */}
      <section className="relative min-h-[100vh] flex flex-col justify-center items-center overflow-hidden pt-20">
        {/* Background Image & Strong Overlay */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            src="/assets/ertiga/WhatsApp Image 2026-04-11 at 12.16.35 AM (1).jpeg" 
            alt="Hero Background" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-transparent to-brand-dark z-10"></div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 w-full text-center flex flex-col items-center">
          <motion.div
            variants={heroStagger}
            initial="hidden"
            animate="visible"
            className="w-full"
          >
            <motion.div variants={heroItem} className="mb-4">
              <span className="inline-block bg-brand-gold/20 text-brand-gold px-6 py-2 rounded-full border border-brand-gold/30 font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs backdrop-blur-md">
                Premium Car Rental Service
              </span>
            </motion.div>

            <motion.h1 variants={heroItem} className="text-5xl sm:text-8xl lg:text-9xl font-heading font-black leading-[1] mb-2 tracking-tighter">
              Aadishakti
            </motion.h1>
            <motion.h1 variants={heroItem} className="text-5xl sm:text-8xl lg:text-9xl font-heading font-black leading-[1] mb-6 sm:mb-8 tracking-tighter gold-text drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
              Tours & Travels
            </motion.h1>
            
            <motion.p variants={heroItem} className="text-base sm:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl leading-relaxed opacity-90 mx-auto font-medium">
              Experience the pinnacle of <span className="text-brand-gold italic">Luxury & Safety</span>. Available across <span className="text-brand-gold font-bold underline decoration-brand-gold/30 underline-offset-8">All of India</span>.
            </motion.p>
            
            <motion.div variants={heroItem} className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto mb-12 sm:mb-20 justify-center">
              <Link 
                to="/booking" 
                className="bg-gold-gradient text-brand-dark px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-black text-lg sm:text-xl shadow-[0_20px_50px_rgba(245,166,35,0.4)] hover:scale-105 transition-all duration-300 text-center group overflow-hidden relative"
              >
                <span className="relative z-10">Book Your Journey</span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-[-20deg]"></div>
              </Link>
              <a 
                href="tel:+917057053550" 
                className="bg-white/5 backdrop-blur-xl border border-white/20 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-black text-lg sm:text-xl hover:bg-white hover:text-brand-dark transition-all duration-500 text-center flex items-center justify-center gap-3 shadow-2xl"
              >
                <Phone size={20} /> Call Now
              </a>
            </motion.div>

            {/* Stats - Grid layout for Mobile */}
            <motion.div variants={heroItem} className="w-full max-w-5xl">
              <div className="grid grid-cols-3 gap-3 sm:gap-8">
                <div className="backdrop-blur-lg bg-white/5 border border-white/10 p-4 sm:p-8 rounded-2xl flex flex-col items-center group hover:bg-white/10 transition-colors duration-500">
                  <span className="text-3xl sm:text-5xl font-heading font-black gold-text mb-2 group-hover:scale-110 transition-transform">22+</span>
                  <span className="text-[10px] sm:text-sm text-gray-400 font-bold uppercase tracking-[0.2em] text-center">Years Experience</span>
                </div>
                <div className="backdrop-blur-lg bg-white/5 border border-white/10 p-4 sm:p-8 rounded-2xl flex flex-col items-center group hover:bg-white/10 transition-colors duration-500">
                  <span className="text-3xl sm:text-5xl font-heading font-black gold-text mb-2 group-hover:scale-110 transition-transform">100%</span>
                  <span className="text-[10px] sm:text-sm text-gray-400 font-bold uppercase tracking-[0.2em] text-center">Safety Record</span>
                </div>
                <div className="backdrop-blur-lg bg-white/5 border border-white/10 p-4 sm:p-8 rounded-2xl flex flex-col items-center group hover:bg-white/10 transition-colors duration-500">
                  <span className="text-3xl sm:text-5xl font-heading font-black gold-text mb-2 group-hover:scale-110 transition-transform">24/7</span>
                  <span className="text-[10px] sm:text-sm text-gray-400 font-bold uppercase tracking-[0.2em] text-center">VIP Support</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 opacity-40 hidden sm:block"
        >
          <ChevronDown size={28} className="text-white" />
        </motion.div>
      </section>

      {/* SECTION 2 — WHY CHOOSE US (TOUCH OPTIMIZED) */}
      <section className="py-24 relative dot-pattern px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-heading font-black mb-4"
            >
              Why Ride With <span className="gold-text">Us</span>
            </motion.h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: ShieldCheck, title: "Unmatched Safety", desc: "Your safety is our priority. Sandeep is a licensed professional." },
              { icon: Clock, title: "Always On Time", desc: "Punctuality is in our DNA. We reach 10 minutes before time." },
              { icon: Map, title: "All India Expert", desc: "Expert navigation across all Indian states and highway routes." },
              { icon: Star, title: "Premium Comfort", desc: "Strictly sanitized AC vehicles for a refreshing journey." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-4 sm:p-8 flex flex-col items-center text-center border border-white/5 shadow-xl"
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-4 sm:mb-6">
                  <feature.icon size={20} className="text-brand-gold sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-sm sm:text-xl font-black font-heading text-white mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-[10px] sm:text-sm text-gray-400 leading-relaxed line-clamp-3 sm:line-clamp-none">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — OUR FLEET */}
      <section className="py-24 bg-brand-deepblue grid-pattern relative px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-heading font-black text-white mb-4"
            >
              Our Executive <span className="gold-text">Fleet</span>
            </motion.h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Top Tier AC Vehicles</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {featuredCars.map((car, idx) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <CarCard car={car} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — DRIVER */}
      <DriverSection />

      {/* SECTION 5 — BOOK YOUR TRIP CTA (MOBILE FIRST) */}
      <section className="relative py-24 bg-brand-dark overflow-hidden px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="text-center lg:text-left">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl sm:text-6xl font-heading font-black mb-6 leading-tight"
              >
                Ready for a <span className="gold-text">Smooth Ride?</span>
              </motion.h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Book instantly or chat with us for any custom trip requirements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="https://wa.me/917057053550"
                  className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-black text-lg shadow-lg flex items-center justify-center gap-3"
                >
                  <MessageSquare className="w-6 h-6" /> WhatsApp
                </a>
                <a 
                  href="tel:+917057053550"
                  className="bg-white text-brand-dark px-8 py-4 rounded-xl font-black text-lg shadow-lg flex items-center justify-center gap-3"
                >
                  <Phone className="w-6 h-6" /> Call Now
                </a>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-lg mx-auto"
            >
              <BookingForm />
            </motion.div>
            
          </div>
        </div>
      </section>
    </div>
  );
}