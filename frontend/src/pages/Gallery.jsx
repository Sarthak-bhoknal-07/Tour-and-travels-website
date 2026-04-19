import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: '/assets/ertiga/WhatsApp Image 2026-04-11 at 12.16.34 AM.jpeg', category: 'Ertiga' },
    { src: '/assets/ertiga/WhatsApp Image 2026-04-11 at 12.16.35 AM (1).jpeg', category: 'Ertiga' },
    { src: '/assets/ertiga/WhatsApp Image 2026-04-11 at 12.16.35 AM.jpeg', category: 'Ertiga' },
    { src: '/assets/ertiga/WhatsApp Image 2026-04-11 at 12.16.36 AM (1).jpeg', category: 'Ertiga' },
    { src: '/assets/ertiga/WhatsApp Image 2026-04-11 at 12.16.36 AM (2).jpeg', category: 'Ertiga' },
    { src: '/assets/ertiga/WhatsApp Image 2026-04-11 at 12.16.36 AM.jpeg', category: 'Ertiga' },
    { src: '/assets/ertiga/WhatsApp Image 2026-04-11 at 12.16.37 AM (1).jpeg', category: 'Ertiga' },
    { src: '/assets/glanza/WhatsApp Image 2026-04-11 at 12.16.16 AM (1).jpeg', category: 'Glanza' },
    { src: '/assets/glanza/WhatsApp Image 2026-04-11 at 12.16.16 AM (2).jpeg', category: 'Glanza' },
    { src: '/assets/glanza/WhatsApp Image 2026-04-11 at 12.16.16 AM.jpeg', category: 'Glanza' },
    { src: '/assets/glanza/WhatsApp Image 2026-04-11 at 12.16.17 AM (1).jpeg', category: 'Glanza' },
    { src: '/assets/glanza/WhatsApp Image 2026-04-11 at 12.16.17 AM.jpeg', category: 'Glanza' },
    { src: '/assets/glanza/WhatsApp Image 2026-04-11 at 12.16.18 AM.jpeg', category: 'Glanza' }
  ];

  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  const openLightbox = (index) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-brand-deepblue pt-32 pb-24 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-20">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-3 md:mb-4"
          >
            Our <span className="gold-text">Gallery</span>
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
            Moments from our premium journeys across India. Luxury, comfort, and safety in every frame.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-4 mb-16 flex-wrap"
        >
          {['All', 'Ertiga', 'Glanza'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full font-bold font-sub transition-all duration-300 ${
                filter === cat 
                  ? 'bg-gold-gradient text-brand-dark shadow-[0_0_20px_rgba(245,166,35,0.4)]' 
                  : 'glass-card text-white border border-brand-gold hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid - Masonry */}
        <motion.div layout className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          <AnimatePresence>
            {filteredImages.map((img, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={`${img.src}-${index}`}
                className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer group break-inside-avoid border border-white/5 hover:border-brand-gold/40 transition-all duration-500"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={img.src} 
                  alt={img.category} 
                  loading="lazy"
                  className="w-full h-auto object-cover transform transition duration-1000 group-hover:scale-110 group-hover:blur-[2px]" 
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center">
                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full bg-brand-gold/20 flex items-center justify-center mb-4 text-brand-gold backdrop-blur-xl border border-brand-gold/30 shadow-[0_0_30px_rgba(245,166,35,0.3)]"
                  >
                    <ZoomIn size={32} />
                  </motion.div>
                  <span className="text-white font-black font-heading tracking-[0.2em] uppercase text-sm drop-shadow-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    View Full Experience
                  </span>
                  <div className="mt-2 text-brand-gold font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    {img.category} Selection
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center backdrop-blur-2xl px-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-brand-gold transition-colors z-50 p-4 bg-white/5 rounded-full hover:bg-white/10 border border-white/10" 
              onClick={closeLightbox}
            >
              <X size={32} />
            </motion.button>

            {/* Navigation Buttons */}
            <motion.button 
              whileHover={{ x: -5, backgroundColor: "rgba(245,166,35,1)", color: "#0A0F1E" }}
              className="absolute left-4 sm:left-10 text-brand-gold transition-all z-50 p-5 bg-white/5 rounded-full border border-brand-gold/30 hidden md:flex" 
              onClick={prevImage}
            >
              <ChevronLeft size={40} />
            </motion.button>

            <motion.img 
              initial={{ scale: 0.8, opacity: 0, rotateY: 45 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: -45 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              src={filteredImages[selectedImage].src} 
              alt="Full size view" 
              className="max-h-[80vh] max-w-full md:max-w-[85vw] object-contain rounded-2xl shadow-[0_0_80px_rgba(245,166,35,0.2)] border border-white/10" 
              onClick={(e) => e.stopPropagation()}
            />

            <motion.button 
              whileHover={{ x: 5, backgroundColor: "rgba(245,166,35,1)", color: "#0A0F1E" }}
              className="absolute right-4 sm:right-10 text-brand-gold transition-all z-50 p-5 bg-white/5 rounded-full border border-brand-gold/30 hidden md:flex" 
              onClick={nextImage}
            >
              <ChevronRight size={40} />
            </motion.button>
            
            {/* Counter & Info */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
              <div className="glass-card px-8 py-3 rounded-2xl border border-brand-gold/30 text-white font-black font-sub shadow-2xl backdrop-blur-xl flex items-center gap-4">
                <span className="text-brand-gold text-xl">{selectedImage + 1}</span>
                <span className="w-px h-6 bg-white/20"></span>
                <span className="opacity-60 text-sm tracking-widest">{filteredImages.length} IMAGES</span>
              </div>
              <div className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em]">Swipe or use arrows to navigate</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
