import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Wind, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

const vehicles = [
  {
    id: 'ERTIGA',
    name: 'Suzuki Ertiga',
    seats: 7,
    ac: true,
    price: 'Contact for best price',
    features: ['Spacious Family Car', 'Comfortable Long Drive', 'Ample Luggage Space', 'Music System', 'Experienced Driver'],
    images: [
      '/assets/ertiga/WhatsApp Image 2026-04-11 at 12.16.36 AM (2).jpeg',
      '/assets/ertiga/WhatsApp Image 2026-04-11 at 12.16.35 AM (1).jpeg',
      '/assets/ertiga/WhatsApp Image 2026-04-11 at 12.16.35 AM.jpeg',
      '/assets/ertiga/WhatsApp Image 2026-04-11 at 12.16.36 AM (1).jpeg',
      '/assets/ertiga/WhatsApp Image 2026-04-11 at 12.16.36 AM.jpeg'
    ]
  },
  {
    id: 'GLANZA',
    name: 'Toyota Glanza',
    seats: 5,
    ac: true,
    price: 'Contact for best price',
    features: ['Smooth Premium Ride', 'Fuel Efficient', 'Perfect for Small Family', 'Premium Interiors', 'High Safety Standards'],
    images: [
        '/assets/glanza/WhatsApp Image 2026-04-11 at 12.16.18 AM.jpeg',
        '/assets/glanza/WhatsApp Image 2026-04-11 at 12.16.17 AM (1).jpeg',
      '/assets/glanza/WhatsApp Image 2026-04-11 at 12.16.16 AM.jpeg',
      '/assets/glanza/WhatsApp Image 2026-04-11 at 12.16.16 AM (2).jpeg'
    ]
  }
];

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };
  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative h-72 md:h-full w-full overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.img 
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          src={images[currentIndex]} 
          alt={`Car view ${currentIndex + 1}`} 
          className="absolute inset-0 w-full h-full object-cover" 
        />
      </AnimatePresence>
      
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent md:hidden"></div>
      
      <button 
        onClick={prevSlide} 
        className="absolute top-1/2 -translate-y-1/2 left-4 bg-brand-gold/90 hover:bg-brand-gold text-brand-dark p-3 rounded-full shadow-lg md:opacity-100 opacity-0 group-hover:opacity-100 transition-all hover:scale-110 z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute top-1/2 -translate-y-1/2 right-4 bg-brand-gold/90 hover:bg-brand-gold text-brand-dark p-3 rounded-full shadow-lg md:opacity-100 opacity-0 group-hover:opacity-100 transition-all hover:scale-110 z-10"
      >
        <ChevronRight size={24} />
      </button>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <button 
            key={idx} 
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex ? 'bg-brand-gold w-6' : 'bg-white/50 hover:bg-white'}`}
          />
        ))}
      </div>
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
                <ImageSlider images={vehicle.images} />
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
                </div>

                <div className="mb-10 relative z-10">
                  <h4 className="font-heading font-bold text-xl mb-5 text-white">Premium Features</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2">
                    {vehicle.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 text-gray-400 text-sm font-sub"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shadow-[0_0_5px_rgba(245,166,35,0.8)]"></span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
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
