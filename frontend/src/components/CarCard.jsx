import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CarCard({ car }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col h-full group cursor-pointer shadow-2xl transition-all duration-500 hover:shadow-brand-gold/20"
    >
      <div className="relative h-72 overflow-hidden">
        <img 
          src={car.image} 
          alt={car.name} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
        
        {/* Badges */}
        <div className="absolute top-5 left-5 bg-gold-gradient text-brand-dark px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
          {car.seats} Seats
        </div>
        <div className="absolute top-5 right-5 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
          {car.ac ? 'Luxury AC' : 'Non-AC'}
        </div>

        <div className="absolute bottom-6 left-8 z-10">
          <h3 className="text-3xl font-heading font-black text-white mb-1 group-hover:gold-text transition-colors duration-300">{car.name}</h3>
          <div className="w-12 h-1 bg-brand-gold rounded-full transition-all duration-500 group-hover:w-24"></div>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow relative z-10">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-brand-gold font-black text-xl">{car.price}</span>
          <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">• All India Service</span>
        </div>
        
        <ul className="space-y-4 mb-10 flex-grow">
          {car.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-4 text-sm text-gray-300 font-medium group/item">
              <div className="w-2 h-2 rounded-full bg-brand-gold shadow-[0_0_12px_rgba(245,166,35,0.8)] flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
              <span className="group-hover/item:text-white transition-colors">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link 
          to={`/vehicles?car=${car.id}`} 
          className="relative overflow-hidden block w-full text-center bg-white/5 border border-white/10 hover:border-brand-gold/50 text-white py-4 rounded-xl font-black text-lg transition-all duration-500 group/btn"
        >
          <span className="relative z-10 group-hover/btn:text-brand-dark transition-colors duration-300">View Experience</span>
          <div className="absolute inset-0 bg-gold-gradient translate-y-[101%] group-hover/btn:translate-y-0 transition-transform duration-500"></div>
        </Link>
      </div>
    </motion.div>
  );
}
