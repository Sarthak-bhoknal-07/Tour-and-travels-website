import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Wind, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { vehicles } from '../data/vehicles';

function ImageSlider({ image }) {
  // Use a single image as there's only one per vehicle in the new structure
  return (
    <div className="relative h-72 md:h-full w-full overflow-hidden group">
        <img 
          src={image} 
          alt="Car view" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent md:hidden"></div>
    </div>
  );
}

export default function Vehicles() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-brand-dark pt-32 pb-24 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-20 relative">
          <div className="absolute inset-0 dot-pattern opacity-50 z-0"></div>
          <div className="relative z-10 bg-brand-dark/80 backdrop-blur-sm p-4 md:p-8 rounded-2xl md:rounded-3xl inline-block border border-white/5 shadow-2xl">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-3xl md:text-5xl font-heading font-bold text-white mb-3 md:mb-4"
            >
              Our Premium <span className="gold-text">Vehicles</span>
            </motion.h1>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.2 }}
              className="w-16 md:w-24 h-1 bg-gold-gradient mx-auto mb-4 md:mb-6"
            ></motion.div>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg font-sub"
            >
              Choose from our strictly maintained executive fleet. Luxury AC cars for premium long distance journeys.
            </motion.p>
          </div>
        </div>

        {/* Vehicles List */}
        <div className="space-y-16 max-w-6xl mx-auto">
          {vehicles.map((vehicle, idx) => (
            <motion.div 
              key={vehicle.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-dark rounded-3xl flex flex-col md:flex-row overflow-hidden border border-white/10"
              id={vehicle.id.toLowerCase()}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 relative min-h-[300px] border-b md:border-b-0 md:border-r border-white/10">
                <ImageSlider image={vehicle.image} />
              </div>
              
              {/* Details Side */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl"></div>
                
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold gold-text drop-shadow-sm">{vehicle.name}</h2>
                </div>
                
                <div className="flex flex-wrap gap-4 text-gray-300 mb-8 relative z-10">
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm font-sub">
                    <Users size={18} className="text-brand-gold" />
                    <span>{vehicle.seats} Seater</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm font-sub">
                    <Wind size={18} className="text-brand-gold" />
                    <span>{vehicle.ac ? 'AC Equipped' : 'Non-AC'}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/30 px-4 py-2 rounded-full text-sm font-sub text-brand-gold font-bold">
                    <span>₹{vehicle.rate}/km</span>
                  </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/booking', { state: { selectedCar: vehicle.id } })}
                  className="w-full sm:w-auto self-start bg-gold-gradient text-brand-dark px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_25px_rgba(245,166,35,0.4)] transition-shadow shadow-lg relative z-10"
                >
                  Book This Car
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
